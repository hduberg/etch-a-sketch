const grid = document.querySelector('.grid-container');


function createGrid() {
    const gridSqaureDiv = document.createElement('div');
    gridSqaureDiv.setAttribute('class', 'grid-square');
    gridSqaureDiv.textContent = i;
    grid.appendChild(gridSqaureDiv);

}
i = 1;
while (i <= 10) {
    createGrid();
    i++;
}
const sqaureHover = document.querySelectorAll('.grid-square');

sqaureHover.forEach(function(hover){
    hover.addEventListener('mouseover', function(e){
       hover.style.background = "red";
    })
})