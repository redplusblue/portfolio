// Project class
/**
 * @class Project
 * @param {string} name - Name of the project
 * @param {string} img - Path to the image
 * @param {string} description - Description of the project
 * @param {string} link - Link to the project
 * @param {string} github - Link to the github repo
 */
class Project {
  constructor(name, img, description, link, github) {
    this.name = name;
    this.img = img;
    this.description = description;
    this.link = link;
    this.github = github;
  }
}

export const projectElements = [
  new Project(
    "SlickCV",
    "../assets/projects/slickcv.gif",
    "SlickCV: A React resume app with limitless sections, real-time updates, and a polished, minimalist design for a seamless user experience. Masterful use of React concepts and meticulous planning result in clean, modularized code.",
    "https://redplusblue.github.io/SlickCV/",
    "https://github.com/redplusblue/slickcv"
  ),

  new Project(
    "Weather App",
    "../assets/projects/weather-app.gif",
    "Multiplatform Weather Web App: Real-time weather data with city search, precise location fetch, and Unsplash images. Meticulously coded for efficiency, offering a seamlessly styled interface with minimized API calls.",
    "https://redplusblue.github.io/weather-app/",
    "https://github.com/redplusblue/weather-app"
  ),

  new Project(
    "Battleship",
    "../assets/projects/battleship.gif",
    "Battleship Game: Seamlessly navigate multiple pages, customize ship placement, and face off against AI with score tracking. Meticulously coded with JS modules, classes, and CSS animations for a captivating and beautiful gaming experience.",
    "https://redplusblue.github.io/battleship/",
    "https://github.com/redplusblue/battleship"
  ),

  new Project(
    "Knight's Travails",
    "../assets/projects/knights-travails.gif",
    "Knights-Travails: Strategize with a knight and pawn, witness the quickest path found through clean, modularized JS using Trees and BFS. Enjoy a lightweight, well-aligned webpage highlighting the journey's visited squares.",
    "https://redplusblue.github.io/knights-travails/",
    "https://github.com/redplusblue/knights-travails"
  ),

  new Project(
    "Calculator",
    "../assets/projects/calculator.png",
    "Calculator: Effortlessly compute +, -, /, *, % with hover-and-copy, keyboard inputs, and a sleek design using HTML, CSS, and JS.",
    "https://redplusblue.github.io/calculator/",
    "https://github.com/redplusblue/calculator"
  ),
];
