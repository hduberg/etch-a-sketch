const grid = document.querySelector('.grid-container');
const buttonsContainer = document.querySelector('.buttons')
const inputContainer = document.querySelector('.input-container');

createGridSquares(4)

function createGridSquares(number) {

    let squares = grid.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    grid.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${number}, 1fr)`;
    let amount = number * number;
    for (let i = 0; i < amount; i++) {
        const div = document.createElement('div');
        grid.appendChild(div).classList.add('grid-square');
    }
    gradientBlackColor();
}

function blackColor() {
    const gridSquares = document.querySelectorAll('.grid-square');
    gridSquares.forEach(gridSquare => gridSquare.addEventListener('mouseover', () => {
        gridSquare.style.background = 'black';
     
    }))
}

function gradientBlackColor() {
    const gridSquares = document.querySelectorAll('.grid-square');
    gridSquares.forEach(gridSquare => gridSquare.addEventListener('mouseover', () => {
        let currentOpacity = gridSquare.style.opacity;
        gridSquare.style.background = "rgb(0, 0, 0)"
        console.log(gridSquare.style.opacity)
        if(gridSquare.style.opacity == 0.4){
            console.log("this is .2")
            return;
            
        }else if(currentOpacity === ""){
            console.log("this is null")
            currentOpacity = 0.2;
            gridSquare.style.opacity = parseFloat(currentOpacity);
            return;
        }
        else{
            console.log("this is the rest")
            gridSquare.style.opacity = parseFloat(currentOpacity)+.2
            return;
        }
        
        
}))
}

function greyColor() {
    const gridSquares = document.querySelectorAll('.grid-square');
    gridSquares.forEach(gridSquare => gridSquare.addEventListener('mouseover', () => {
        let randNum = Math.floor(Math.random() * 255);
        gridSquare.style.background = `rgb(${randNum}, ${randNum},${randNum})`
        
    }))
    
    
}

function whiteColor() {
    const gridSquares = document.querySelectorAll('.grid-square');
    gridSquares.forEach(gridSquare => gridSquare.addEventListener('mouseover', () => {
        gridSquare.style.background = 'white';
    }))
}

function allColors() {
    const gridSquares = document.querySelectorAll('.grid-square');
    gridSquares.forEach(gridSquare => gridSquare.addEventListener('mouseover', () => {
        let R = Math.floor(Math.random() * 255);
        let G = Math.floor(Math.random() * 255);
        let B = Math.floor(Math.random() * 255);
        gridSquare.style.background = `rgb(${R}, ${G}, ${B})`
        gridSquare.style.border = `rgb(${R}, ${G}, ${B})`
        gridSquare.style.opacity = "1";
    }))
    
    
}

function resetCanvas() {
    const gridSquares = document.querySelectorAll('.grid-square');
    gridSquares.forEach(gridSquare => (gridSquare.remove()))
    createGridSquares(4)
}

function resizeCanvas(input) {
    if (input >= 2 && input <= 100) {
        let errorText = document.querySelectorAll('.texterror');
        errorText.forEach((h3) => h3.remove());
        createGridSquares(input);
    } else {
        let errorText = document.querySelectorAll('.texterror');
        errorText.forEach((h3) => h3.remove());
        let inputTextError = document.createElement('h3');
        inputTextError.textContent = "You can only choose numbers 2-100";
        inputContainer.appendChild(inputTextError).classList.add('texterror');
        createGridSquares(16);
    }
}


