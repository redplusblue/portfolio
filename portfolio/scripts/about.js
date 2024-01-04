// Read More Button on About Card
document.querySelectorAll("#read-more").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let innerSpan = btn.querySelector("span");
    let text = innerSpan.innerText;
    let child = btn.parentElement.querySelector(".ui-text");
    child.classList.toggle("show");
    text = "Read More" === text ? "Read Less" : "Read More";
    // Hide other button if this is expanded
    if (text === "Read Less") {
      if (
        document.querySelector("#show-skills").children[0].innerText === "Hide"
      ) {
        document.querySelector("#show-skills").click();
      }
    }
    // Toggle easy-to-read class when media query is active
    if (window.matchMedia("(max-width: 950px)").matches) {
      document.querySelector("#about-card").classList.toggle("expanded");
    }
    btn.querySelector("span").innerText = text;
  });
});
