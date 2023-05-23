
function createElement (tagName, className, numberElement){
    const cellElement = document.createElement(tagName);
    cellElement.className = className;
    return cellElement;
}

const gridElement = document.getElementById('grid');


for ( let i = 0; i < 100; i++){

    gridElement.appendChild(createElement('div', 'cell'));
}

