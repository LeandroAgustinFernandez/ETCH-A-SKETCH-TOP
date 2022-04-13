const gridContainer = document.querySelector('.grid_container');
function createGrid() {
    gridContainer.setAttribute('style','display:grid');
    gridContainer.style.gridTemplateColumns = 'repeat(16, 1fr)';
    gridContainer.style.gridTemplateRows = 'repeat(16, 1fr)';
    for (let index = 0; index < 16 * 16; index++) {
        const div = document.createElement('div');
        div.classList.add('square')
        div.textContent = index;
        div.style.cssText = 'border: 1px solid black'
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

createGrid();