const grid = document.querySelector('.grid-container');


function createGrid() {
    const gridDiv = document.createElement('div');
    gridDiv.setAttribute('class', 'grid-Square');
    gridDiv.textContent = i;
    grid.appendChild(gridDiv);
}
i = 1;
while (i <= 256) {
    createGrid();
    i++;
}
