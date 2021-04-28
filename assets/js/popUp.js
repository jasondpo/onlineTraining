import { exportCurrQuestion } from "./main.js";
/*--------------------------------------------------------------
DIRECTORY
	
.01 Collect Images / getJSON

.02 Open/Close Pop Up 

.03 Click back & forth through slides

.04 Track question when user advances to next Question
--------------------------------------------------------------*/

/*--------------------------------------------------------------
.01 Collect Images
--------------------------------------------------------------*/
var questionNo = 0;
var sld = 0;
var totalSlides;
var slideArray = [];
var i;

function collectSlides() {
    slideArray = [];
    questionNo = exportCurrQuestion();
    $.getJSON('assets/js/quizData.json', function (data) {
        //Totall number of images
        totalSlides = data.slide[questionNo].slides.length;
        document.getElementById("totalPopUpNo").innerHTML = totalSlides;
        //Insert '1' into current currentPopUpNo
        document.getElementById("currentPopUpNo").innerHTML = 1;
        //Loop Through Answers
        for (i = 0; i < totalSlides; i++) {
            slideArray.push(data.slide[questionNo].slides[i]);
        }
    });
    setTimeout(() => {
        document.getElementById("popUpBox").style.backgroundImage = "url(assets/" + slideArray[0] + ")";
    }, 250)
}
collectSlides();

/*--------------------------------------------------------------
.02 Open/Close Pop Up 
--------------------------------------------------------------*/
// Open Pop Up
$("#illoBtnExpand").click(function () {
    $("#overlay").fadeIn("fast", function(){
        $("#popUpBoxContainer").css('display', "flex");
        $("#popUpBox").removeClass("closePopUp").addClass("openPopUp");
    });
})

// Close Pop Up
$("#closePopUpBox").click(function () {
    $("#overlay").delay(250).fadeOut("fast");
    $("#popUpBox").removeClass("openPopUp").addClass("closePopUp");
    setTimeout(function () {
        $("#popUpBoxContainer").css('display', "none");
    }, 750);
})

/*--------------------------------------------------------------
.03 Click back & forth through slides
--------------------------------------------------------------*/
var nextBtn = document.getElementById("fwdSlideBtn");
var backBtn = document.getElementById("bkdSlideBtn");

nextBtn.addEventListener("click", function () {
    peruseSlides("next");
})
backBtn.addEventListener("click", function () {
    peruseSlides("back");
})

function peruseSlides(this_instance) {
    if (this_instance == "next") {
        sld++
        if (sld == totalSlides) { sld = 0 }
        document.getElementById("popUpBox").style.backgroundImage = "url(assets/" + slideArray[sld] + ")";
    } else if (this_instance == "back") {
        sld--
        if (sld == -1) { sld = totalSlides - 1 }
        document.getElementById("popUpBox").style.backgroundImage = "url(assets/" + slideArray[sld] + ")";
    } else {
        sld = 0;
    }
    document.getElementById("currentPopUpNo").innerHTML = (sld + 1);
}

/*--------------------------------------------------------------
.04 Track Question when user advances to next Question
--------------------------------------------------------------*/
$("#forwardSlideBtn").click(function () {
    collectSlides();
    peruseSlides('resetToZero');
})
