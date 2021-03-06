<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="user-scalable=yes, width=400" />
    <!-- <link rel='stylesheet' href='assets/css/bootstrap/css/bootstrap.min.css'> -->
    <link rel='stylesheet' href='assets/css/admin.css'>
    <link rel='stylesheet' href='assets/css/main.css'>
    <link rel='stylesheet' href='assets/css/popUp.css'>
    <link rel='stylesheet' href='assets/css/video.css'>
    <link href='https://use.fontawesome.com/releases/v5.8.1/css/all.css' rel='stylesheet' type='text/css' />
    <script src="assets/js/jquery/jquery.js"></script>
    <title>JCCO Online Training (Beta)</title>
</head>

<body id="bootstrap-overrides">
    <svg id="fader"></svg>

    <div id="signIn-conatainer-admin">
        <div id='closeAdminDialogueBox'></div>
        <h4>Administrator Login</h4>        
        <input type="text" autocomplete="off" placeholder="Username" name="Username" id="txtEmail" onfocus="if(placeholder=='Username')placeholder='';this.removeAttribute('readonly')" onblur="if(placeholder=='')placeholder='Username'" readonly required>


        <input type="password" placeholder="Password" name="pword" id="txtPassword" onfocus="if(placeholder=='Password')placeholder='';this.removeAttribute('readonly')" onblur="if(placeholder=='')placeholder='Password'" readonly required>


        <button id="btnLogin"><i class="fas fa-lock"></i> Login</button><button id="btnSignUp">Sign Up</button><button id="btnLogout"
            class="hide">Log Out</button>
    </div>

    <!-- This can be in main.php -->
    <div id='test-completed-dialogueBox'>
        Congratulations. You have completed the test.
    </div>
    <!-- This can be in main.php -->

    <div id='overlay'></div>