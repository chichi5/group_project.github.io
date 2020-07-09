window.console = window.console || function (t) { };


if (document.location.search.match(/type=embed/gi)) {
    window.parent.postMessage("resize", "*");
}


// Variables
var player,
    card = document.querySelectorALL('.card-v'),
    play = document.querySelectorALL('.card-play'),
    video = document.querySelectorALL('.card-video');

// Shine effect
card.onmousemove = function (e) {
    const x = e.pageX - card.offsetLeft;
    const y = e.pageY - card.offsetTop;

    card.style.setProperty('--x', x + 'px');
    card.style.setProperty('--y', y + 'px');
};

// Youtube API
function onYouTubePlayerAPIReady() {
    player = new YT.Player('video', {
        events: {
            'onReady': onPlayerReady
        }
    });
}

// Player Ready
function onPlayerReady(event) {
    play.addEventListener('click', function () {
        card.classList.add('video-is-open');
        setTimeout(function () {
            video.style.display = 'block';
            player.playVideo();
        }, 500);
    });
}

// Inject YouTube API script
var tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);