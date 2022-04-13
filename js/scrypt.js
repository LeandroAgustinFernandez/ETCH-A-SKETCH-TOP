let squaresPerSide = 16;
let typeColor = "grayscale";

const gridContainer = document.querySelector(".grid_container");
const buttonReset = document.querySelector(".btn_reset");
const buttonsColorType = document.querySelectorAll(".color_type");

buttonsColorType.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    typeColor = e.target.dataset.type;
  });
});

buttonReset.addEventListener("click",setNewGrid);

function setNewGrid() {
  squaresPerSide = prompt(
    "Set number of squares per side for the new grid",
    16
  );
  if (!squaresPerSide) {
    squaresPerSide = 16;
  }
  if (squaresPerSide > 100) {
    console.log("Sory, the max number number of squares is 100");
    squaresPerSide = 100;
  }
  createGrid(squaresPerSide);
}

function createGrid(squaresPerSide) {
  gridContainer.innerHTML = "";
  gridContainer.style.gridTemplateColumns = `repeat(${squaresPerSide}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${squaresPerSide}, 1fr)`;
  let grid = squaresPerSide * squaresPerSide;
  for (let index = 0; index < grid; index++) {
    const div = document.createElement("div");
    div.classList.add("square");
    div.dataset.opacity = 0;
    // div.textContent = index;
    gridContainer.appendChild(div);
  }
  setChangeColor();
}

function setChangeColor() {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("mouseover", changeColor);
  });
}

function changeColor(e) {
  if (typeColor == "grayscale") {
    let opacity = Number(e.target.dataset.opacity);
    opacity < 1
      ? (e.target.dataset.opacity = opacity + 0.1)
      : (e.target.dataset.opacity = 1);
    e.target.style.backgroundColor = `rgba(0,0,0,${e.target.dataset.opacity})`;
  } else {
    e.target.dataset.opacity = 0;
    e.target.style.backgroundColor = `rgb(${Math.floor(
      Math.random() * 255
    )},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
  }
}
createGrid(squaresPerSide);
