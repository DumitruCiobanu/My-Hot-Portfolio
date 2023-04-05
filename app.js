let restartButton = document.querySelector("#explode");
restartButton.addEventListener("click", playAudioVideo());

function playAudioVideo(event) {
  var audio = document.getElementById("myAudio");

  audio.play();
}

// Removes video after playback
document.getElementById("myVideo").addEventListener("ended", myHandler, false);
function myHandler(e) {
  if (!e) {
    e = window.event;
  }
  // What you want to do after the event
  document.getElementById("myVideo").style.display = "none";
  document.getElementById("videoEnd").style.display = "block";
}

window.onscroll = function () {
  myFunction();
};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
