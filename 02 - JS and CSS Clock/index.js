// 1. 1초마다 함수를 호출 해준다.
// 2. Date() 함수를 사용해 시, 분, 초를 가져와 각 element에 적용 해준다.
const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegress = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegress}deg)`;

  const mins = now.getMinutes();
  const minDegress = (mins / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minDegress}deg)`;

  const hours = now.getHours();
  const hoursDegress = (hours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hoursDegress}deg)`;
}
setInterval(setDate, 1000);
