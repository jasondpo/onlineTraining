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

/*--------------------------------------------------------------
Admin / Overlay
--------------------------------------------------------------*/
$("#adminBtn").click(function () {
    $("#overlay").fadeIn("fast");
    $("#signIn-conatainer-admin").delay(250).fadeIn("fast");
    $("#test-completed-dialogueBox").fadeOut("fast");
})

$("#overlay, #closeAdminDialogueBox").click(function () {
    $("#overlay").delay(250).fadeOut("fast");
    $("#signIn-conatainer-admin, #test-completed-dialogueBox").fadeOut("fast");
    $("#popUpBox").removeClass("openPopUp").addClass("closePopUp");
})