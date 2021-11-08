const pressed = [];
const secretCode = "wesbos";
window.addEventListener("keyup", (e) => {
  // 웹에서 눌리는 키에 값
  console.log(e.key);
  // 배열안에 푸쉬
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

  if (pressed.join("").includes(secretCode)) {
    console.log("DING DING!");
    cornify_add();
  }
  console.log(pressed);
});
