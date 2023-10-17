// Element class
/**
 * @class Element
 * @param {string} name - Name of the element
 * @param {string} src - Path to the image
 * @param {string} category - Category of the element
 * @param {string} type - Type of the element
 */
class Element {
  constructor(name, src, category, type) {
    this.name = name;
    this.src = src;
    this.category = category;
    this.type = type;
  }
}

export const skillElements = [
  new Element("HTML5", "../assets/Icons/html5.svg", "frontend", "Language"),
  new Element("CSS3", "../assets/Icons/css3.svg", "frontend", "Language"),
  new Element("JS", "../assets/Icons/javascript.svg", "frontend", "Language"),
  new Element("TS", "../assets/Icons/typescript.svg", "frontend", "Language"),
  new Element("Jquery", "../assets/Icons/jquery.svg", "frontend", "Framework"),
  new Element("React", "../assets/Icons/react.svg", "frontend", "Framework"),
  new Element("Svelte", "../assets/Icons/svelte.svg", "frontend", "Framework"),
  new Element(
    "Bootstrap",
    "../assets/Icons/bootstrap.svg",
    "frontend",
    "Framework"
  ),
  new Element(
    "Tailwind",
    "../assets/Icons/tailwind.svg",
    "frontend",
    "Framework"
  ),
  new Element("NodeJS", "../assets/Icons/nodejs.svg", "backend", "Framework"),
  new Element("Express", "../assets/Icons/express.svg", "backend", "Framework"),
  new Element("MySQL", "../assets/Icons/mysql.svg", "backend", "database"),
  new Element(
    "PostgreSQL",
    "../assets/Icons/postgresql.svg",
    "backend",
    "database"
  ),
  new Element("MongoDB", "../assets/Icons/mongodb.svg", "backend", "database"),
  new Element("SQLite", "../assets/Icons/sqlite.svg", "backend", "database"),
  new Element("Django", "../assets/Icons/django.svg", "backend", "Framework"),
  new Element("Flask", "../assets/Icons/flask.svg", "backend", "Framework"),
  new Element("Python", "../assets/Icons/python.svg", "backend", "Language"),
  new Element("C", "../assets/Icons/c.svg", "backend", "Language"),
  // Testing
  new Element("Jest", "../assets/Icons/jest.svg", "backend", "Testing"),
  new Element("pytest", "../assets/Icons/pytest.svg", "backend", "Testing"),
  new Element("JUnit", "../assets/Icons/junit.svg", "backend", "Testing"),
  // Tools
  new Element("Webpack", "../assets/Icons/webpack.svg", "backend", "Tool"),
  new Element("NPM", "../assets/Icons/npm.svg", "backend", "Tool"),
  new Element("Vite", "../assets/Icons/vite.svg", "backend", "Tool"),
  new Element("Git", "../assets/Icons/git.svg", "backend", "Tool"),
  new Element(
    "Android Studio",
    "../assets/Icons/android-studio.svg",
    "android",
    "Tool"
  ),
  new Element("LaTeX", "../assets/Icons/latex.svg", "backend", "Tool"),
  new Element("Java", "../assets/Icons/java.svg", "android", "Language"),
  // Cloud
  new Element("AWS", "../assets/Icons/aws.svg", "backend", "Cloud"),
  new Element("Azure", "../assets/Icons/azure.svg", "backend", "Cloud"),
  new Element("Heroku", "../assets/Icons/heroku.svg", "backend", "Cloud"),
  new Element("Firebase", "../assets/Icons/firebase.svg", "backend", "Cloud"),
  // ML
  new Element("Tensorflow", "../assets/Icons/tensorflow.svg", "backend", "ML"),
  new Element("PyTorch", "../assets/Icons/pytorch.svg", "backend", "ML"),
  new Element("Pandas", "../assets/Icons/pandas.svg", "backend", "ML"),
  new Element("Numpy", "../assets/Icons/numpy.svg", "backend", "ML"),
  new Element("Jupyter", "../assets/Icons/jupyter.svg", "backend", "ML"),
  // Linux
  new Element("Linux", "../assets/Icons/linux.svg", "backend", "OS"),
  new Element("Ubuntu", "../assets/Icons/ubuntu.svg", "backend", "OS"),
  new Element("Bash", "../assets/Icons/bash.svg", "backend", "Language"),
];
