let key = document.querySelectorAll(".key");

function playSound(keyCode) {
  let audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  let key = document.querySelector(`div[data-key="${keyCode}"]`);
  if (
    keyCode == 65 ||
    keyCode == 83 ||
    keyCode == 68 ||
    keyCode == 70 ||
    keyCode == 71 ||
    keyCode == 72 ||
    keyCode == 74
  ) {
    audio.play();
    audio.currentTime = 0; //rewind
    key.classList.add("key-animation");
  } else {
  }
}

key.forEach((e) => {
  e.addEventListener("transitionend", function () {
    this.classList.remove("key-animation");
  });
});

key.forEach((e) => {
  e.addEventListener("click", function () {
    let keyCode = e.getAttribute("data-key");
    playSound(keyCode);
  });
});

window.addEventListener("keydown", function (e) {
  playSound(e.keyCode);
});
