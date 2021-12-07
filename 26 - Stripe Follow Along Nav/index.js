const triggers = document.querySelectorAll(".cool > li");
const background = document.querySelectorAll(".dropdownBackground");
const nav = document.querySelectorAll(".top");

function handleEnter() {
  this.classList.add("trigger-enter");
  setTimeout(function () {
    this.classList.add(trigger);
  });
}

function handleLeave() {
  console.log("hi!!!");
}

triggers.forEach((trigger) =>
  trigger.addEventListener("mouseenter", handleEnter)
);
triggers.forEach((trigger) =>
  trigger.addEventListener("mouseleave", handleLeave)
);
