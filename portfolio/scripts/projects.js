import { projectElements } from "./project-elements";

const elements = projectElements;
let curElement = 0;

const produceDOMElement = (element) => {
  let project = document.createElement("div");
  project.classList.add("project");
  let preview = document.createElement("div");
  preview.classList.add("preview");
  let figure = document.createElement("figure");
  let img = document.createElement("img");
  img.src = element.img;
  img.alt = element.name;
  figure.appendChild(img);
  preview.appendChild(figure);
  let info = document.createElement("div");
  info.classList.add("details");
  let title = document.createElement("div");
  title.classList.add("heading");
  title.innerHTML = element.name;
  let description = document.createElement("p");
  description.innerHTML = element.description;
  let links = document.createElement("div");
  links.classList.add("links");
  let link = document.createElement("a");
  link.href = element.link;
  link.innerHTML = "Link to App";
  let github = document.createElement("a");
  github.href = element.github;
  github.innerHTML = "Code";
  links.appendChild(link);
  links.appendChild(github);
  info.appendChild(title);
  info.appendChild(description);
  info.appendChild(links);
  project.appendChild(preview);
  project.appendChild(info);
  return project;
};

const changeElement = () => {
  let element = elements[curElement];
  let project = produceDOMElement(element);
  let container = document.querySelector(".projects-container");
  container.innerHTML = "";
  container.appendChild(project);
};

// Prev and next buttons
const prev = document.querySelector(".prev-btn");
const next = document.querySelector(".next-btn");

prev.addEventListener("click", () => {
  curElement = curElement === 0 ? elements.length - 1 : curElement - 1;
  changeElement();
});
next.addEventListener("click", () => {
  curElement = curElement === elements.length - 1 ? 0 : curElement + 1;
  changeElement();
});

changeElement();
