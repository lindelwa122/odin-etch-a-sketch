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

createGrid(16, 16);

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
};

const newGridButton = document.querySelector(".update-grid");
newGridButton.addEventListener("click", updateGrid);

const boxes = document.querySelectorAll(".column");

boxes.forEach((box) => {
  box.addEventListener("mouseover", () => {
    box.style.backgroundColor = "yellow";
  });
});
