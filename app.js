function playAudioVideo() {
  var audio = document.getElementById("myAudio");
  var video = document.getElementById("myVideo");
  var divToHide = document.getElementById("videoEnd");

  divToHide.style.display = "none";
  video.style.display = "block";

  audio.play();
  video.play();
}

let restartButton = document.querySelector("#explode");
restartButton.addEventListener("click", restartAnimation, false);

function restartAnimation(event) {
  let aparition = document.querySelector(".webdev");
  let rotation = document.querySelector(".run-animation");

  aparition.style.animationName = "none";
  rotation.style.animationName = "none";

  requestAnimationFrame(() => {
    aparition.style.animationName = "";
    rotation.style.animationName = "";
  });
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
