
const container = document.getElementById("outline");


// create a x by x container of divs 

function createGrid(sizeContainer) {
    for (let i = 0; i < sizeContainer*sizeContainer; i++) {
        const gridPiece = document.createElement('div');
        gridPiece.className = 'grid-piece';
        let height = 1/sizeContainer;
        gridPiece.style.flex = `1 1 calc(${height*100}%)`;
        gridPiece.style.height = `calc(${height*100}%)`;
        container.appendChild(gridPiece);
    }
    const boxes = document.querySelectorAll(".grid-piece");
    boxes.forEach((box) => {
    box.addEventListener('mouseover', () => {
        box.style.backgroundColor = 'black'; // Change background color on hover
    })
    })

    function clearGrid() {
        boxes.forEach((box) => {
            box.style.backgroundColor = 'white';
        })
    }

    const clearButton = document.getElementById("clear");

    
    clearButton.addEventListener('click', clearGrid);
    
}

createGrid(16);

function setGrid() {
    while ( container.firstChild ) container.removeChild( container.firstChild );
    let newSize = prompt('Please enter the size of grid (i.e) 16 for a 16x16 grid');
    createGrid(newSize);
    sizeP = document.querySelector('p');
    sizeP.textContent = `${newSize}x${newSize}`
    

    
}

// mouse over to change divs color

const boxes = document.querySelectorAll(".grid-piece");

const resetButton = document.getElementById("reset");
// reset function, promt user for size of grid, limit to 100 or less

resetButton.addEventListener('click', setGrid);