const createDiv = (...classList) => {
  const div = document.createElement("div");
  div.classList = [...classList].join(" ");
  return div;
};

const createGrid = (rows, columns) => {
  const container = document.querySelector(".container");

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

const boxes = document.querySelectorAll(".column");

boxes.forEach((box) => {
  box.addEventListener("mouseover", () => {
    box.style.backgroundColor = "yellow";
  });
});
