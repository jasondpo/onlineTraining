/*--------------------------------------------------------------
DIRECTORY
	
.01 Fill in Divs / GetJSON

.02 When user clicks an option/answer

.03 Next slide button

.04 Configure layout of test based on type

.05 Greetings 

.06 Current Time

.07 Logout Dropdown

.08 Admin / Overlay
--------------------------------------------------------------*/	

/*--------------------------------------------------------------
.01 Fill in Divs / GetJSON
--------------------------------------------------------------*/
var questionNumber = 0;
var correctAns = "";
var text = "";
var quizLength;
var i;
let currNo;

// Fill in DIVs
    function startTest() {
        text = "";
        $.getJSON('assets/js/quizData.json', function (data) {
            var totalChoices = data.slide[questionNumber].ans.length;
            var testType = data.slide[questionNumber].type;
            quizLength = data.slide.length;
            correctAns = data.slide[questionNumber].correctAns;
            // Loop Through Answers
            for (i = 0; i < totalChoices; i++) {
                text += "<li id='ans" + (i + 1) + "'class='multipleChoiceAns'>" + data.slide[questionNumber].ans[i] + "</li>";
            }
            // Output Answers
            document.getElementById("ansList").innerHTML = text;
            // Question
            $('#questionBox').html(data.slide[questionNumber].question);
            // Illustration
            $('#illustrationBox').css("background-image", "url(assets/" + data.slide[questionNumber].link + ")");
            // Current slide number
            $("#currentNo").html(questionNumber + 1);
            // Total slides number
            $("#totalNo").html(quizLength);
            // Check test type
            testLayout(testType);
        });
    }
    startTest();   

/*--------------------------------------------------------------
.02 When user clicks an option/answer
--------------------------------------------------------------*/
$("body").on("click", ".multipleChoiceAns", function () {
    if (this.id == correctAns) {
        this.classList.add("rightAns");
    } else {
        this.classList.add("wrongAns");
        document.getElementById(correctAns).classList.add("rightAns");
    }
    $("#forwardSlideBtn").delay("750").fadeIn('slow');
    disablePointerEvents();
})


// Disable pointer events after user makes a choice
function disablePointerEvents() {
    var disable = document.getElementsByClassName("multipleChoiceAns");
    for (var i = 0; i < disable.length; i++) {
        disable[i].classList.add("cursorOff");
    }
}

/*--------------------------------------------------------------
.03 Next slide button
--------------------------------------------------------------*/
$("#forwardSlideBtn").click(function () {
    questionNumber++;
    if ((questionNumber + 1) > quizLength) {
        $("#forwardSlideBtn").removeClass("slideBtnActivate");
        $("#overlay").delay(1000).fadeIn("fast");
        $("#test-completed-dialogueBox").delay(1250).fadeIn("fast");
        $(".hideAdminBtn").delay(1250).fadeIn("fast");
    } else {
        $("#forwardSlideBtn").fadeOut('slow');
        $("#hypeContainer").fadeOut("slow", function () {
            startTest();
            $("#hypeContainer").fadeIn("slow");
        });
    }
    window.questionNumber
    exportCurrQuestion()
})

export function exportCurrQuestion() {
    return questionNumber
}

/*--------------------------------------------------------------
.04 Configure layout of test based on type
--------------------------------------------------------------*/
function testLayout(testType) {
    resetLayout();
    if (testType == "illustrated") {
        $("#illustrationBox").removeClass("hide");
        $("#questionBox").addClass("questionBoxNarrow");
    }
    if (testType == "video") {
        $("#videoPlayBtnPoster, #illustrationBox").removeClass("hide");
        $("#questionBox").addClass("questionBoxNarrow");
    }
    if (testType == "popUp") {
        $("#illustrationBox").removeClass("hide");
        $("#illoBtnExpand").removeClass("hide");
        $("#questionBox").addClass("questionBoxNarrow");
    }
}

function resetLayout() {
    // Removes Play Button Poster
    $("#videoPlayBtnPoster, #illustrationBox, #illoBtnExpand").addClass("hide");
    // Extends Question Box to its original size
    $("#questionBox").removeClass("questionBoxNarrow");
}

/*--------------------------------------------------------------
.05 Greetings 
--------------------------------------------------------------*/
    var d = new Date();
    var currtime = d.getHours() * 100 + d.getMinutes();
    
    if (currtime > 1199 && currtime < 1800) {
        document.querySelector('#greet').innerHTML = 'Good afternoon, ';
    } if (currtime > 1799 && currtime < 2399) {
        document.querySelector('#greet').innerHTML = 'Good evening, ';
    } if (currtime > 0 && currtime < 1200) {
        document.querySelector('#greet').innerHTML = 'Good morning, ';
    }

/*--------------------------------------------------------------
.06 Current Time
--------------------------------------------------------------*/
    var curTime = document.getElementById("currentTime");
    window.onload = displayClock();
    function displayClock() {
        var currentTime = new Date().toLocaleTimeString();
        if (curTime) {
            curTime.innerHTML = currentTime;
        }
        setTimeout(displayClock, 1000);
    }

/*--------------------------------------------------------------
.07 Logout Dropdown
--------------------------------------------------------------*/
$("#name").click(function () {
    $("#dropDown").toggle();
})

$(window).mouseover(function () {
    setTimeout(function () { $("#dropDown").fadeOut("fast"); }, 250)
});

$('h2, #name, #dropDown, #menu, #triangleUp').mouseover(function (event) {
    event.stopPropagation();
});

$("#logOutLink").click(function () {
    localStorage.clear();
})

/// Refresh Page
$('#restart').click(function () {
    location.reload();
});

