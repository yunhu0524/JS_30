// 필요한 이벤트 밑 변수
// keydown 이벤트 생성
window.addEventListener("keydown", playSound);
// transitionend 이벤트
const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
// 사운드를 내는 로직 + 호버 액션
//playSound()
function playSound(e) {
  // 사운드 재생 로직
  // data-key 를 설정해준 코드 값에 맞게 사운드가 재생 되어야한다.
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  // audio가 아니면 return
  if (!audio) return;
  // audio play
  audio.play();
  // audio 를 반복클릭할 수 있게 currentTime 을 0 로 바꿔 준다.
  audio.currentTime = 0;
  // hover action 을 줘서 임팩트가 생기게 해준다.
  const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
  // hover action 추가
  key.classList.add("playing");
}

//removeTransition() hover remove
function removeTransition() {
  this.classList.remove("playing");
}
