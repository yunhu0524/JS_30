window.addEventListener("keydown", playSound);

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

function playSound(e) {
  console.log(e.keyCode);
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);

  if (!audio) return;

  audio.play();
  audio.currentTime = 0;
  const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
  key.classList.add("playing");
}

function removeTransition() {
  this.classList.remove("playing");
}
