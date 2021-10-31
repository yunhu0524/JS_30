// panels
const panels = document.querySelectorAll(".panel");
console.log(panels);

function toggleOpen() {
  this.classList.toggle("open");
}

function toggleActive(e) {
  // open-active
  if (e.propertyName == "flex-grow") {
    this.classList.toggle("open-active");
  }
}
// toggleOpen
panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
// toggleActive
panels.forEach((panel) =>
  panel.addEventListener("transitionend", toggleActive)
);
