<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="user-scalable=yes, width=400" />
    <link rel='stylesheet' href='assets/css/main.css'>
    <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script>
    <title>JCCO Online Training</title>
</head>

<body>
    <svg id="fader"></svg>

    <div id="signIn-conatainer-admin">
        <input type="text" autocomplete="off" placeholder="Username" name="Username" id="txtEmail" onfocus="if(placeholder=='Username')placeholder='';this.removeAttribute('readonly')" onblur="if(placeholder=='')placeholder='Username'" readonly required>


        <input type="password" placeholder="Password" name="pword" id="txtPassword" onfocus="if(placeholder=='Password')placeholder='';this.removeAttribute('readonly')" onblur="if(placeholder=='')placeholder='Password'" readonly required>


        <button id="btnLogin">Login</button><button id="btnSignUp">Sign Up</button><button id="btnLogout"
            class="hide">Log Out</button>
    </div>

    <div id='overlay'></div>

    
    <div id='header'>
        <h1>JCCO <span>Online Training System (Beta)</span></h1>
        <h2><span id="greet"></span><span id="name"></span></h2>
    </div>
    <div id='dropDown'>
        <ul id="menu">
            <a href="index.php" id="logOutLink"><li id="logOut">Log out</li></a>
            <li id="quit">Quit</li>
            <li id="restart">Restart</li>
        </ul>
        <div id='triangleUp'></div>
    </div>
    <div id="hypeContainer">
        <!-- copy these lines to your document: -->
        <div id="laurenmichael_hype_container" class="HYPE_document"
            style="margin:auto;position:relative;width:800px;height:520px;overflow:hidden;">
            <script type="text/javascript" charset="utf-8"
                src="Lauren_Michael.hyperesources/laurenmichael_hype_generated_script.js?76542"></script>
        </div>
        <!-- end copy -->
    </div>
    <div id='currentTime'></div>

    <h3 id="adminBtn">Admin</h3>

    <script>
        if (localStorage.firstName == undefined) {
            window.location.href = "index.php";
        }
        $("#name").html(localStorage.firstName)
    </script>
    <script src='assets/js/main.js'></script>
    <script src='assets/js/page_transition.js'></script>
</body>

</html>