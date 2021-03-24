//// Admin ////
$("#adminBtn").click(function () {
    $("#overlay").fadeIn("fast");
})

$("#overlay").click(function () {
    $("#overlay").fadeOut("fast");
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


//// Log in admission ////



//// Current Time
window.onload = displayClock();
function displayClock() {
    var currentTime = new Date().toLocaleTimeString();
    document.getElementById("currentTime").innerHTML = currentTime;
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

$("#logOut").click(function () {
    localStorage.clear();
    window.location.href = "index.html";
})

/// Refresh Page
$('#restart').click(function () {
    location.reload();
});
