var video = document.querySelector('.video');
var juice = document.querySelector('.video-timeline-bar');
var playBtn = document.getElementById('play-pause');
var stopVid = document.getElementById('stop-video');
var ffBtn = document.getElementById('fast-forward');
var rwBtn = document.getElementById('rewind');
var soundBtn = document.getElementById('audio');

function togglePlayPause() {
    if (video.paused) {
        playBtn.className = 'pause';
        video.play()
    } else {
        playBtn.className = "play";
        video.pause();
    }
}

playBtn.onclick = function () {
    togglePlayPause();
};

stopVid.onclick = function () {
    video.pause();
    video.currentTime = 0;
    playBtn.className = 'play';
};

ffBtn.onclick = function () {
    video.pause();
    video.currentTime += 1;
    playBtn.className = 'play';
};

rwBtn.onclick = function () {
    video.pause();
    video.currentTime -= 1;
    playBtn.className = 'play';
};

video.addEventListener('timeupdate', function () {
    var juicePos = video.currentTime / video.duration;
    juice.style.width = juicePos * 100 + "%";
    if (video.ended) {
        playBtn.className = "play";
    }
})

soundBtn.onclick = function () {
    toggleSound();
};

function toggleSound() {
    if (video.muted == true) {
        video.muted = false
        $("#audio").html("<i class='fas fa-volume-up'></i>");
    } else {
        video.muted = true;
        $("#audio").html("<i class='fas fa-volume-mute'></i>");
    }
}

// Open Video
$('#videoPlayBtnPoster').click(function () {
    $("#overlay").fadeIn("fast", function(){
        togglePlayPause();
        $(".c-video, #closeVideo").fadeIn("slow");
        $("#videoPlayBtnPoster").addClass("activeBtnBlue");
        setTimeout(() => {
            $("#videoPlayBtnPoster").removeClass("activeBtnBlue")
        }, 500)
    });
})

// Close Video
$('#closeVideo').click(function () {
    $("#overlay").delay(250).fadeOut("fast");
    video.pause();
    video.currentTime = 0;
    playBtn.className = 'play';
    $(".c-video, #closeVideo").hide();
})

