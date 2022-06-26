const container = document.querySelector('#container');
const node = document.createElement('div');
const button = document.createElement('button');
const clearBtn = document.createElement('button');
button.textContent = 'Number of grid';
button.addEventListener('click', makeGrid);
clearBtn.textContent = "Clear";
clearBtn.addEventListener('click', clear);
node.appendChild(button);
node.appendChild(clearBtn);
document.body.appendChild(node).id = ('top');
button.classList.toggle('button');
clearBtn.classList.toggle('clear');



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
        cell.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'black';
        });
        container.appendChild(cell).className = "grid";
    };
}

function numberOfGrid() {
    let number = prompt();
    return number > 100 ? number = 100 : number;
}















