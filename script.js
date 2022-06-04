const container = document.querySelector('#container');
const node = document.createElement('div');
const button = document.createElement('button');
button.textContent = 'Number of grid';
button.addEventListener('click', makeGrid);
node.appendChild(button);
document.body.appendChild(node).classList.add('button');


function clear() {
    container.innerHTML = '';
}

function makeGrid() {
    clear();
    let number = numberOfGrid();
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

function numberOfGrid() {
    let number = prompt();
    return number > 100 ? number = 100 : number;
}















