<?php include "includes/header.php"; ?>
    
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
    
<div id='slideNumber'>
    <span id="currentNo"></span> of <span id="totalNo"></span>
</div>

    <div id="hypeContainer">
        <!-- copy these lines to your document: -->
        <div id="laurenmichael_hype_container" class="HYPE_document"
            style="margin:auto;position:relative;width:800px;height:520px;overflow:hidden;">
            <script type="text/javascript" charset="utf-8"
                src="Lauren_Michael.hyperesources/laurenmichael_hype_generated_script.js?76542">
            </script>
        </div>
        <!-- end copy -->
    </div>

    <div id='backSlideBtn' class="slideBtnClass crossed" onclick ="HYPE.documents['Lauren_Michael'].showPreviousScene(HYPE.documents['Lauren_Michael'].kSceneTransitionCrossfade);">

    </div>
    <div id='forwardSlideBtn' class="slideBtnClass crossed" onclick ="HYPE.documents['Lauren_Michael'].showNextScene(HYPE.documents['Lauren_Michael'].kSceneTransitionCrossfade);">

    </div>

    <div id='currentTime'></div>

    <h3 id="adminBtn">Admin</h3>

    <script>
        if (localStorage.firstName == undefined) {
            window.location.href = "index.php";
        }
        $("#name").html(localStorage.firstName)
       
    </script>

<?php include "includes/footer.php"; ?>