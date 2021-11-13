const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");

function shadow(e) {
  // const width = hero.offsetWidth;
  // const height = hero.offsetHeight; 아래와 같은 표현
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offestX: x, offsetY: y } = e;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }
  console.log(x, y);
}

hero.addEventListener("mousemove", shadow);
