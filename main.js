document.querySelectorAll(".ui-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let innerSpan = btn.querySelector("span");
    let text = innerSpan.innerText;
    let child = btn.parentElement.querySelector(".ui-text");
    child.classList.toggle("show");
    text = "Read More" === text ? "Read Less" : "Read More";
    btn.querySelector("span").innerText = text;
  });
});
