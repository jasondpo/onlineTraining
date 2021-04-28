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

    <!-- Pop Up Box STARTS -->
    <div id='popUpBoxContainer'>
        <div id='popUpBox'>

            <div id='slidePopUpNumber'>
                Slide <span id="currentPopUpNo" class="slideNumberClass"></span> of <span id="totalPopUpNo"
                    class="slideNumberClass"></span>
            </div>

            <div id='closePopUpBox'></div>
            <div id='bkdSlideBtn' class="slidePopBtnClass">Back</div>
            <div id='fwdSlideBtn' class="slidePopBtnClass">Next</div>
        </div>
    </div>
    <!-- Pop Up Box ENDS -->


    <!-- Video STARTS -->
    <div id='closeVideo'></div>
    <div class='c-video'>
        <video class="video" src="video/video.mp4" muted></video>
        <div class='controls'>
            <div class="timeline-bar-container">
                <div class="video-timeline-bar"></div>
            </div>
            <div class="buttons">
                <button id="play-pause"></button>
                <button id="stop-video"></button>
                <button id="rewind"><i class="fas fa-backward"></i></button>
                <button id="fast-forward"><i class="fas fa-forward"></i></button>
                <button id="audio"><i class="fas fa-volume-mute"></i></button>
            </div>
        </div>
    </div>
    <!-- Video ENDS -->

    <div id='slideNumber'>
        Question <span id="currentNo" class="slideNumberClass"></span> of <span id="totalNo"
            class="slideNumberClass"></span>
    </div>
    <div id='hypeContainer'>
        <div id='illustrationBox' class="hide">
            <div id='illoBtnExpand' class="hide">
                <i class="fas fa-expand"></i>
            </div>
            <div id='videoPlayBtnPoster' class="hide">
                <i class="fas fa-play"></i>
            </div>
        </div>
        <div id='questionBox'></div>
        <div id='checkBox-container'>
            <ul id="ansList"></ul>
        </div>
    </div>

    <div id='forwardSlideBtn' class="slideBtnClass"></div>

    <div id='currentTime'></div>

    <h3 id="adminBtn" class="hideAdminBtn">Admin</h3>

    <script>
        if (localStorage.firstName == undefined) {
            window.location.href = "index.php";
        }
        $("#name").html(localStorage.firstName)
       
    </script>

    <?php include "includes/footer.php"; ?>



