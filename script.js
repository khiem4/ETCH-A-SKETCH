const container = document.querySelector('#container');
let horizontal;
let vertical;

function height() {
    vertical = document.createElement('div');
    vertical.classList.add('div');
    vertical.addEventListener("mouseenter", function (e) {
        e.target.style.backgroundColor = 'yellow';
    });
    vertical.addEventListener("mouseleave", function (e) {
        e.target.style.backgroundColor = "white";
    });
    container.appendChild(vertical);
}

function width() {
    horizontal = document.createElement('div');
    horizontal.classList.add('div');
    horizontal.addEventListener('mouseenter', function (e) {
        e.target.style.backgroundColor = 'yellow';
    });
    horizontal.addEventListener("mouseleave", function (e) {
        e.target.style.backgroundColor = "white";
    });
    container.appendChild(horizontal);
}

for (let i = 0; i < 16; i++) {
    height();
    for (let j = 0; j < 16; j++) {
        width();
    }
}





