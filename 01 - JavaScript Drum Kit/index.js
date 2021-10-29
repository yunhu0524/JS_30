// keydown 이벤트 발생시 playSound 함수
window.addEventListener("keydown", playSound);
const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
// playSound ()
function playSound(e) {
  // audio + data-key 접근
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  // audio 가 아닐경우 return
  if (!audio) return;
  // audio.add()
  audio.play();
  // currentTime 초기화 필요
  // audio.currentTime = 0
  audio.currentTime = 0;
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  // .playing 클래스 추가
  key.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}
