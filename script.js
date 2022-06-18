let images = [
    "images/project-image01.png",
    "images/project-image02.png",
    "images/project-image03.png",
    "images/project-image04.png",
    "images/project-image05.png",
  ],
  idx = 0;

function fun() {
  document.querySelector(".slide-item").src = images[idx];
  if (idx == images.length - 1) {
    idx = 0;
  } else {
    idx++;
  }
  setTimeout(function () {
    fun();
  }, 1000);
}
fun();

document.querySelectorAll(".mode").forEach(
  (m) =>
    (m.onclick = function () {
      document.documentElement.classList.toggle("dark");
    })
);
