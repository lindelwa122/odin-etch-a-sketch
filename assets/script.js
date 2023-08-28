const clearGrid = () => {
  const boxes = document.querySelectorAll(".column");
  boxes.forEach((box) => {
    box.style.backgroundColor = "";
  });
};

const createDiv = (...classList) => {
  const div = document.createElement("div");
  div.classList = [...classList].join(" ");
  return div;
};

const createGrid = (rows, columns) => {
  const container = document.querySelector(".container");
  container.innerHTML = "";

  for (let i = 0; i < rows; i++) {
    let row = createDiv("row");

    for (let j = 0; j < columns; j++) {
      const column = createDiv("column");
      row.appendChild(column);
    }

    container.appendChild(row);
  }
};

const getColor = () => {
  const color = localStorage.getItem("color");
  if (!color) {
    localStorage.setItem("color", "yellow");
  } else if (color === "random") {
    return getRandomColor();
  }

  return localStorage.getItem("color");
};

const getRandomColor = () => {
  const red = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${blue}, ${green})`;
};

const mouseoverHandler = () => {
  const boxes = document.querySelectorAll(".column");

  boxes.forEach((box) => {
    box.addEventListener("mouseover", () => {
      box.style.backgroundColor = getColor();
    });
  });
};

const updateColor = () => {
  const color = prompt(
    "Color Name? Ensure your chosen color is valid",
    "yellow"
  ).toLowerCase();

  const isColorValid = confirm(`Are you sure ${color} is a valid color?`);

  if (isColorValid) localStorage.setItem("color", color);
  else updateColor();
};

const updateGrid = () => {
  const rows = +prompt("Rows? (Max is 100)");
  const columns = +prompt("Columns? (Max is 100");

  if (
    isNaN(rows) ||
    rows < 1 ||
    rows > 100 ||
    isNaN(columns) ||
    columns < 1 ||
    columns > 100
  ) {
    alert("Your input was invalid, by default the grid will be set to 16x16");
    createGrid(16, 16);
  } else createGrid(rows, columns);

  mouseoverHandler();
};

createGrid(16, 16);
mouseoverHandler();

// randomize color
const randomizeColorButton = document.querySelector(".randomize-color");
randomizeColorButton.addEventListener("click", () => {
  localStorage.setItem("color", "random");
});

// create new grid
const newGridButton = document.querySelector(".update-grid");
newGridButton.addEventListener("click", updateGrid);

// clear grid
const clearButton = document.querySelector(".clear-grid");
clearButton.addEventListener("click", clearGrid);

// change color
const changeColorButton = document.querySelector(".change-color");
changeColorButton.addEventListener("click", updateColor);
