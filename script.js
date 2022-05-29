const container = document.querySelector('#container');

let horizontal;
let vertical;

for (let i = 0; i < 16; i++) {
    vertical = document.createElement('div');
    vertical.classList.add('cell');
    vertical.textContent = 'Text'
    container.appendChild(vertical);
    for (let j = 0; j < 16; j++) {
        horizontal = document.createElement('div');
        horizontal.classList.add('div');
        container.appendChild(horizontal);
    }
}






