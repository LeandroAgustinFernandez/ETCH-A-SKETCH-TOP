let squaresPerSide = 16;

const gridContainer = document.querySelector('.grid_container');
const buttonReset = document.querySelector('.btn_reset')

buttonReset.addEventListener('click',()=>{
    squaresPerSide = prompt('Set number of squares per side for the new grid',16);
    if (!squaresPerSide) {
        squaresPerSide = 16;
    }
    if (squaresPerSide > 100) {
        console.log('Sory, the max number number of squares is 100');
        squaresPerSide = 100;
    }
    createGrid(squaresPerSide);
})

function createGrid(squaresPerSide) {
    gridContainer.innerHTML = '';
    gridContainer.style.gridTemplateColumns = `repeat(${squaresPerSide}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${squaresPerSide}, 1fr)`;
    let grid = squaresPerSide * squaresPerSide;
    for (let index = 0; index < grid; index++) {
        const div = document.createElement('div');
        div.classList.add('square')
        // div.textContent = index;
        gridContainer.appendChild(div);
    }
    setChangeColor();
}

function setChangeColor() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mouseover',(e)=>{
            e.target.style.backgroundColor = 'black'
        })
    });    
}

createGrid(squaresPerSide);