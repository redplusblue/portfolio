import { skillElements } from "./skill-elements";
// Skill Icons -> Draggable
let skillsContainer = document.querySelector(".skills-container");
let isMouseDown = false;
let startX;
let scrollLeft;

skillsContainer.addEventListener("mouseover", () => {
  skillsContainer.classList.remove("auto-scroll");
  clearInterval(scrollInterval);
});

skillsContainer.addEventListener("mousedown", function (e) {
  isMouseDown = true;
  startX = e.pageX - skillsContainer.offsetLeft;
  scrollLeft = skillsContainer.scrollLeft;
});

skillsContainer.addEventListener("mouseup", function () {
  isMouseDown = false;
});

skillsContainer.addEventListener("mouseleave", function () {
  isMouseDown = false;
  skillsContainer.classList.add("auto-scroll");
  scrollInterval = setInterval(() => {
    if (skillsContainer.classList.contains("auto-scroll")) {
      skillsContainer.scrollLeft += 4;
    }
  }, 20);
});

skillsContainer.addEventListener("mousemove", function (e) {
  if (!isMouseDown) return;
  e.preventDefault();
  let x = e.pageX - skillsContainer.offsetLeft;
  let walk = x - startX;
  skillsContainer.scrollLeft = scrollLeft - walk;
});

// Skills Container Elements
// Element -> E.Name: Used in html.title, and html.alt; E.src -> Used as background image for html.div [IDEA: SVG Icons], E.type: Used to filter elements

// Array of elements
const elements = skillElements;
// Categories: All, FrontEnd, BackEnd, Database, Tools, Android
let frontend = elements.filter((element) => element.category === "frontend");
let backend = elements.filter(
  (element) => element.category === "backend" && element.type !== "database"
);
let database = elements.filter((element) => element.type === "database");
let tools = elements.filter(
  (element) =>
    element.type === "Cloud" ||
    element.category === "android" ||
    element.type === "Tool" ||
    element.type === "Testing"
);

// Auto Scroll skills
let scrollPos = skillsContainer.scrollLeft;
let scrollInterval = setInterval(() => {
  if (skillsContainer.classList.contains("auto-scroll")) {
    skillsContainer.scrollLeft += 4;
  }
}, 20);

// Skill Structure -> Wrapper Div(Div with image bg, Div with name)
elements.forEach((element) => {
  let wrapper = document.createElement("div");
  let image = document.createElement("div");
  image.title = element.name;
  image.alt = element.name;
  image.style.backgroundImage = `url(${element.src})`;
  image.classList.add("skill");
  let title = document.createElement("span");
  title.innerHTML = element.name;
  title.classList.add("skill-name");
  wrapper.appendChild(image);
  wrapper.appendChild(title);
  skillsContainer.appendChild(wrapper);
});

// Skill Selector
let select = document.querySelector(".skill-selector");
// Whene the select is changed
select.addEventListener("change", (e) => {
  // Get the selected option number
  // 0 -> All; 1-> Frontend; 2-> Backend; 3-> Database; 4-> Cloud, Android, Tools
  let option = select.options[select.selectedIndex];
  // Empty the skills container
  skillsContainer.innerHTML = "";
  let cur = [];
  // Replace the array with the selected value
  switch (option.value) {
    case "1":
      cur = frontend;
      break;
    case "2":
      cur = backend;
      break;
    case "3":
      cur = database;
      break;
    case "4":
      cur = tools;
      break;
    default:
      cur = elements;
      break;
  }

  // Create the elements
  cur.forEach((element) => {
    let wrapper = document.createElement("div");
    let image = document.createElement("div");
    image.title = element.name;
    image.alt = element.name;
    image.style.backgroundImage = `url(${element.src})`;
    image.classList.add("skill");
    let title = document.createElement("span");
    title.innerHTML = element.name;
    title.classList.add("skill-name");
    wrapper.appendChild(image);
    wrapper.appendChild(title);
    skillsContainer.appendChild(wrapper);
  });
});
