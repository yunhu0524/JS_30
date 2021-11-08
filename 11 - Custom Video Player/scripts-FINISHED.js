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

/* Build out functions */
// ► 버튼 클릭 이벤트 함수
function togglePlay() {
  const method = video.paused ? "play" : "pause";
  video[method]();
}

// 재생 / 일시정지 기능 함수
function updateButton() {
  const icon = this.paused ? "►" : "❚ ❚";
  console.log(icon);
  toggle.textContent = icon;
}

// -10 / +25 구간 점프 함수
function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

//
function handleRangeUpdate() {
  video[this.name] = this.value;
}

// 재생 시간 표시줄( 전체 )
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

// 재생 시간 표시
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

/* Hook up the event listeners */
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);

toggle.addEventListener("click", togglePlay);
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
