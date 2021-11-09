function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
const sliderImages = document.querySelectorAll(".slide-in");

function checkSlide() {
  sliderImages.forEach((sliderImage) => {
    // half way through the image
    const slideInAt =
      // 스크롤한 값 + 전제 높이 - (이미지 높이 / 2)
      // 전체+스크롤-(전체이미지/2)

      window.scrollY + window.innerHeight - sliderImage.height / 2;
    console.log(slideInAt);
    // bottom of the image
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if (isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add("active");
    } else {
      sliderImage.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", debounce(checkSlide));
