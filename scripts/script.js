const gridContainer = document.querySelector("#grid-container");
const selectBtn = document.querySelector("#select-btn");
let grids = 16;
let initialOpacity = 1;

function drawGrids() {
  for (let i = 1; i <= grids; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    for (let j = 1; j <= grids; j++) {
      let col = document.createElement("div");
      col.classList.add("col");
      col.style.width = `${500 / grids}px`;
      col.style.height = `${500 / grids}px`;
      row.appendChild(col);
    }
    gridContainer.appendChild(row);
  }
}

function removeGrid() {
  Array.from(gridContainer.children).forEach((row) => {
    gridContainer.removeChild(row);
  });
}

function generateRandomColor() {
  return '#' + (Math.random() * 1000000 * 0xffff).toString(16).slice(0, 6);
}
drawGrids();

gridContainer.addEventListener("mouseover", (event) => {
  if (event.target.className == "col") {
    // event.target.style.backgroundColor = generateRandomColor();
    event.target.style.backgroundColor = "black";
    event.target.style.opacity = `${initialOpacity++}%`;
  }
});

selectBtn.addEventListener("click", () => {
  grids = +prompt("Enter No. of Grids between 1 to 100", "16");
  while (grids > 100 || grids < 1) {
    grids = +prompt("Enter No. of Grids between 1 to 100", "16");
  }
  removeGrid();
  initialOpacity = 1;
  drawGrids();
});