const grid = document.querySelector('.grid-container');
const buttonsContainer = document.querySelector('.buttons')
const btnBlack = document.createElement('button');
const btnGrey = document.createElement('button');
const btnRGB = document.createElement('button');
const btnReset = document.createElement('button');
const btnSize = document.createElement('button');
var delayInMilliseconds = 1000;

function createGridSquares(number) {
    grid.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${number}, 1fr)`;
    for (let i = 1; i <= (number * number); i++) {
        const div = document.createElement('div');
        div.textContent = i;
        grid.appendChild(div).classList.add('grid-square');
    }
}

function blackColor() {
    const gridSquares = document.querySelectorAll('.grid-square');
    btnBlack.textContent = 'Black';
    btnBlack.addEventListener('click', () => {
        gridSquares.forEach(gridSquare => gridSquare.addEventListener('mouseover', () => {
            gridSquare.style.background = 'black';
        }))
    })
    buttonsContainer.appendChild(btnBlack).classList.add('btn-black', 'btn');
}

function greyColor() {
    const gridSquares = document.querySelectorAll('.grid-square');
    btnGrey.textContent = 'Grey';
    btnGrey.addEventListener('click', () => {
        gridSquares.forEach(gridSquare => gridSquare.addEventListener('mouseover', () => {
            let randNum = Math.floor(Math.random() * 255);
            gridSquare.style.background = `rgb(${randNum}, ${randNum},${randNum})`
        }))
    })
    buttonsContainer.appendChild(btnGrey).classList.add('btn', 'btn-grey');
}

function allColours() {
    const gridSquares = document.querySelectorAll('.grid-square');
    btnRGB.textContent = 'All the colours!';
    btnRGB.addEventListener('click', () => {
        gridSquares.forEach(gridSquare => gridSquare.addEventListener('mouseover', () => {
            let R = Math.floor(Math.random() * 255);
            let G = Math.floor(Math.random() * 255);
            let B = Math.floor(Math.random() * 255);
            gridSquare.style.background = `rgb(${R}, ${G}, ${B})`
            gridSquare.style.border = `rgb(${R}, ${G}, ${B})`
        }))
    })
    buttonsContainer.appendChild(btnRGB).classList.add('btn', 'btn-rgb');
}

function deleteCanvas() {
    const gridSquares = document.querySelectorAll('.grid-square');
    gridSquares.forEach(gridSquare => gridSquare.remove())
}

function userInput(){
    deleteCanvas();
    let user = prompt("How many pixels do you want?");
    if (user === null || user < 1) {
        console.log("if")
        theGame(16);
    
    } else if (user > 1 && user < 100) {
        console.log("else.if")
        theGame(user);
    
    } else {
        console.log("else")
       theGame(16);
    }

}

function reSize() {
    btnSize.textContent = "Resize canvas";
    btnSize.addEventListener('click', (e) => {
        console.log(e);
        userInput();
        
    });
    buttonsContainer.appendChild(btnSize).classList.add('btn');
}

function reSet() {
    btnReset.textContent = "Reset canvas";
    btnReset.addEventListener('click', () => {
        deleteCanvas();
        createGridSquares(16);
        reSize();
        reSet();
        blackColor();
        greyColor();
        allColours();
    })
    buttonsContainer.appendChild(btnReset).classList.add('btn');
}

function startTheGame() {
    btnReset.textContent = "Start Game";
    btnReset.addEventListener('click', () => {
        deleteCanvas();
        createGridSquares(16);
        reSize();
        reSet();
        blackColor();
        greyColor();
        allColours();
    })
    buttonsContainer.appendChild(btnReset).classList.add('btn');
}

function theGame(user) {
    console.log(user)
    createGridSquares(user);
    reSize();
    reSet();
    blackColor();
    greyColor();
    allColours();
}
window.setTimeout(()=>{
    console.log('3 second passed!');
  }, 3000);

startTheGame();


