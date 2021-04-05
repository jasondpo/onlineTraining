// Admin ////
$("#adminBtn").click(function () {
    $("#overlay").fadeIn("fast");
    $("#signIn-conatainer-admin").delay(250).fadeIn("fast")
})

$("#overlay, #closeAdminDialogueBox").click(function () {
    $("#overlay").delay(250).fadeOut("fast");
    $("#signIn-conatainer-admin").fadeOut("fast");
})

//// Greetings ////
d = new Date();
currtime = d.getHours() * 100 + d.getMinutes();

if (currtime > 1199 && currtime < 1800) {
    document.querySelector('#greet').innerHTML = 'Good afternoon, ';
} if (currtime > 1799 && currtime < 2399) {
    document.querySelector('#greet').innerHTML = 'Good evening, ';
} if (currtime > 0 && currtime < 1200) {
    document.querySelector('#greet').innerHTML = 'Good morning, ';
}


//// Log in employee ////
var fname = "";
var lname = "";
var deptSelect = "";
var positionSelect = "";

function checkform() {
    fname = $("#fname").val();
    lname = $("#lname").val();
    deptSelect = $('#deptSelect :selected').val();
    positionSelect = $('#positionSelect :selected').val();
    if (fname.length > 1 && lname.length > 1 && deptSelect != "" && positionSelect != "") {
        $("#beginBtn").html('<i class="fas fa-lock-open"></i> &nbsp;&nbsp;Start');
        $("#beginBtnLink").removeClass('beginBtnLink');
        $("#beginBtn").addClass('beginBtnActive');
        saveLocalStorage();
    } else {
        $("#beginBtn").html('<i class="fas fa-lock"></i> &nbsp;&nbsp;Start');
        $("#beginBtnLink").addClass('beginBtnLink');
        $("#beginBtn").removeClass('beginBtnActive');
        localStorage.clear();
    }
}

function saveLocalStorage() {
    localStorage.firstName = fname;
    localStorage.lasttName = lname;
    localStorage.department = deptSelect;
    localStorage.position = positionSelect;
}

//// Current Time
var curTime = document.getElementById("currentTime");
window.onload = displayClock();
function displayClock() {
    var currentTime = new Date().toLocaleTimeString();
    if (curTime) {
        curTime.innerHTML = currentTime;
    }
    setTimeout(displayClock, 1000);
}

//// Logout Dropdown
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

/// Score

/// Test Function
function testFunction() {
    alert("I am the test function.")
}

/// Right Slide Button


//// Get Current Scene Index Number. Actioned triggered by function in each slide 
var currSlide;
var totalSlides;

function CurrentScene() {
    var array = document.getElementsByClassName("HYPE_scene");
    totalSlides = array.length;
    for (i = 0; i < array.length; i++) {
        if (array[i].style.display === "block") {
            currSlide = i + 1;
            document.getElementById("currentNo").innerHTML = currSlide;
        }
    }
    activateSlideBtns();
}

//// Activate or Deactivate left/right slide button
function activateSlideBtns() {
    if (currSlide >= 2) {
        $("#backSlideBtn").addClass("slideBtnActivate")
    } else {
        $("#backSlideBtn").removeClass("slideBtnActivate")
    }
    if (currSlide == totalSlides) {
        $("#forwardSlideBtn").removeClass("slideBtnActivate")
        // Message: You have completed test
    } else {
        $("#forwardSlideBtn").addClass("slideBtnActivate")
    }
}
activateSlideBtns();