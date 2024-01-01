// Sections so far: Greeting, About, Projects, Contact

function isElementOnScreen(element) {
  // Get the element's position relative to the viewport
  const boundingBox = element.getBoundingClientRect();

  // Get the dimensions of the viewport
  const viewportWidth =
    window.innerWidth || document.documentElement.clientWidth;
  const viewportHeight =
    window.innerHeight || document.documentElement.clientHeight;

  // Check if the element is within the viewport
  const isOnScreen =
    boundingBox.top < viewportHeight &&
    boundingBox.bottom > 0 &&
    boundingBox.left < viewportWidth &&
    boundingBox.right > 0;

  return isOnScreen;
}

// // Example usage:
// const myElement = document.getElementById("yourElementId");
// const elementIsOnScreen = isElementOnScreen(myElement);
// console.log("Is element on screen?", elementIsOnScreen);

// Currently active section
window.addEventListener("scroll", () => {
  if (document.querySelector(".active-btn")) {
    document.querySelector(".active-btn").classList.remove("active-btn");
  }
  if (isElementOnScreen(document.querySelector("#about-card"))) {
    document.querySelector(".nav-btn:nth-child(1)").classList.add("active-btn");
  } else if (isElementOnScreen(document.querySelector("#projects-card"))) {
    document.querySelector(".nav-btn:nth-child(2)").classList.add("active-btn");
  } else if (isElementOnScreen(document.querySelector("#contact-card"))) {
    document.querySelector(".nav-btn:nth-child(3)").classList.add("active-btn");
  }
});

// Navbar buttons
document.querySelectorAll(".nav-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    switch (btn.innerText) {
      case "ABOUT":
        window.scrollTo({
          top: document.querySelector("#about-card").offsetTop,
          behavior: "smooth",
        });
        break;
      case "PROJECTS":
        window.scrollTo({
          top: document.querySelector("#projects-card").offsetTop,
          behavior: "smooth",
        });
        break;
      case "CONTACT":
        window.scrollTo({
          top: document.querySelector("#contact-card").offsetTop,
          behavior: "smooth",
        });
        break;

      default:
        break;
    }
  });
});

// Moon
document.querySelector(".moon").addEventListener("mouseover", () => {
  document.querySelectorAll(".star").forEach((star) => {
    star.classList.add("day");
  });
});

document.querySelector(".moon").addEventListener("mouseout", () => {
  document.querySelectorAll(".star").forEach((star) => {
    star.classList.remove("day");
  });
});
