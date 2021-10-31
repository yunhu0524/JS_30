// .controls 안에 input
// input 하나 만으로도 작동 하지만 다른 input 요소에도 영향이 갈 수 있으므로
const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
  // suffix = input 요소에 dataset.sizing = px
  // suffix = px
  // this = input
  const suffix = this.dataset.sizing || "";
  // :root 가상 요소를 바꿔 주면 img 안에 값이 바뀐다.
  // document = <!doctype> 을 포함한 html 전체 요소
  // document.documentElement = html 전체 head / body
  // setProperty : 기존 css 수정
  document.documentElement.style.setProperty(
    // this.name = body => input에 name 요소 값
    `--${this.name}`,
    this.value + suffix
  );
}

// 값이 change 될 때마다 이벤트 발생
inputs.forEach((input) => input.addEventListener("change", handleUpdate));
// 값이 mousemove 될 때마다 이벤트 발생
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
