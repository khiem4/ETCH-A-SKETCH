const container = document.querySelector('#container');
const node = document.createElement('div');
const button = document.createElement('button');
button.textContent = 'Number of grid';
button.addEventListener('click', gridNumber);
node.appendChild(button);
document.body.appendChild(node);



function makeRows() {
    let number = prompt();
    container.style.setProperty('--grid-rows', number);
    container.style.setProperty('--grid-cols', number);
    for (let i = 0; i < (number * number); i++) {
        let cell = document.createElement("div");
        cell.innerText = (i + 1);
        cell.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'yellow';
        });
        container.appendChild(cell).className = "grid";
    };
}

function gridNumber() {
    let grid = makeRows();
    if (grid > 100) return grid = 100;
}

















