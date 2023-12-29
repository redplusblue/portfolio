// Idea #2: Scroll untill conditions are met
// Conditions: if card is more than 50% in view, then it is the active card.
// If the card is the active card, then the button is active.

// POC: Show the current card's scroll position and top and bottom offsets in the console
window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;
  console.log("scrollPos: ", scrollPos);
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    console.log(
      card.id,
      "offsetTop: ",
      card.offsetTop,
      "offsetBottom: ",
      card.offsetTop + card.offsetHeight
    );
  });
});

// // Calculate the offset of each card and stores it in an object
// const cardOffsets = {};
// // Scrolls to the card with the given id using the stored offsets
// function scrollToCard(cardId) {
//   cardId = "card_" + cardId;
//   const offset = cardOffsets[cardId];
//   if (offset !== undefined) {
//     window.scrollTo({
//       top: offset,
//       behavior: "smooth", // Adds smooth scrolling behavior
//     });
//   } else {
//     console.error(`Offset not found for card with id ${cardId}.`);
//   }
// }

// Change the active button when scrolling - Closed for debugging
// window.addEventListener("scroll", () => {
//   const scrollPos = window.scrollY;
//   let activeBtn = document.querySelector(".active-btn");
//   // If the object is empty, then the offsets have not been calculated
//   if (Object.keys(cardOffsets).length === 0 && scrollPos === 0) {
//     const cards = document.querySelectorAll(".card"); // Assuming you have a class 'card' for your cards
//     cards.forEach((card) => {
//       cardOffsets[card.id] = card.offsetTop;
//     });
//   }
//   if (Object.keys(cardOffsets).length === 0) {
//     // Store the current scroll position
//     if (scrollPos !== 0) {
//       window.scrollTo({
//         top: 0,
//         behavior: "auto",
//       });
//     }
//   }
//   if (
//     scrollPos < cardOffsets["card_1"] - 200 ||
//     scrollPos > cardOffsets["card_3"] + 200
//   ) {
//     if (activeBtn) {
//       activeBtn.classList.remove("active-btn");
//     }
//   } else if (scrollPos < cardOffsets["card_2"]) {
//     if (activeBtn) {
//       activeBtn.classList.remove("active-btn");
//     }
//     document.querySelector("#about-btn").classList.add("active-btn");
//   } else if (
//     scrollPos >= cardOffsets["card_2"] &&
//     scrollPos < cardOffsets["card_3"]
//   ) {
//     if (activeBtn) {
//       activeBtn.classList.remove("active-btn");
//     }
//     document.querySelector("#skills-btn").classList.add("active-btn");
//   } else if (scrollPos >= cardOffsets["card_3"]) {
//     if (activeBtn) {
//       activeBtn.classList.remove("active-btn");
//     }
//     document.querySelector("#projects-btn").classList.add("active-btn");
//   }
// });

const scroller = (dest) => {};

document.addEventListener("DOMContentLoaded", () => {
  const scrollTo = (element) => {
    console.log(
      element,
      document.querySelector(element),
      document.querySelector(element).scrollIntoView
    );
    window.scrollTo({
      top: document.querySelector(element).offsetTop,
      behavior: "smooth",
    });
  };

  // Idea: If at top, scroll to whatever card is asked for by using scrollTO(cardId)

  // Navbar buttons
  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (document.querySelector(".active-btn")) {
        document.querySelector(".active-btn").classList.remove("active-btn");
      }
      btn.classList.add("active-btn");
      console.log(btn.innerText);
      switch (btn.innerText) {
        case "ABOUT":
          scrollTo("#card_1");
          break;
        case "SKILLS":
          scrollTo("#card_2");
          break;
        case "PROJECTS":
          scrollTo("#card_3");
          break;
        case "CONTACT":
          scrollTo("aside");
          break;

        default:
          break;
      }
    });
  });
});
