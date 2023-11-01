// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const btn = document.querySelector(".control-btn");
const video = document.querySelector(".video-container");
const preloader = document.querySelector(".preloader");

btn.addEventListener("click", function () {
  // btn.classList.toggle('slide') The reason we do not use this one in this case is because we want to have a pause and play method and toggle will not allow for that
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();
  } else {
    btn.classList.remove("slide");
    video.play();
  }
});

// preloader
window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});
