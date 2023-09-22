document.getElementById("container").addEventListener("click", () => {
  left = document.getElementById("left");
  right = document.getElementById("right");
  left.classList.toggle("left-open");
  right.classList.toggle("right-open");
});
