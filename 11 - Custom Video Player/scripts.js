/* Get Our Elements */
// video 전체 = player
const player = document.querySelector(".player");
// <video> 태그 mp4
const video = player.querySelector(".viewer");
// 비디오 재생 시간 표시줄 전체
const progress = player.querySelector(".progress");
// 현재 비디오 재생 시간 표시줄
const progressBar = player.querySelector(".progress__filled");
// 재생 버튼
const toggle = player.querySelector(".toggle");
// -10, +25 버튼
const skipButtons = player.querySelectorAll("[data-skip]");
// 볼륨, 재생속도
const ranges = player.querySelectorAll(".player__slider");

function togglePlay() {
  const method = video.paused ? "play" : "pause";
  video[method]();

  // if (video.paused) {
  //   video.play();
  // } else {
  //   video.pause();
  // }
}
function updateButton() {
  const icon = this.paused ? "►" : "❚ ❚";
  toggle.textContent = icon;
}
function skip() {
  console.log(this.dataset.skip);
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  // 진행중인 offset / 전체 width * 지속 시간
  console.log((e.offsetX / progress.offsetWidth) * video.duration);
  console.log(progress.offsetWidth);
  console.log(video.duration);
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}
// video 전체 클릭 이벤트
video.addEventListener("click", togglePlay);
// video play 이벤트
video.addEventListener("play", updateButton);
// video pause 이벤트
video.addEventListener("pause", updateButton);
// video timeupdate 이벤트
video.addEventListener("timeupdate", handleProgress);
// ► (플레이버튼) 클릭 이벤트
// toggle click 이벤트
toggle.addEventListener("click", togglePlay);
// skip
skipButtons.forEach((button) => button.addEventListener("click", skip));
ranges.forEach((range) => range.addEventListener("change", handleRangeUpdate));
ranges.forEach((range) =>
  range.addEventListener("mousemove", handleRangeUpdate)
);

let mousedown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));
