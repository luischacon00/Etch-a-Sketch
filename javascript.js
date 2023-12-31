


function squareGrid(size) {
    let container = document.querySelector('#container');
    for(let i = 1; i <= size; i++ ){
        let column = document.createElement('div');
        column.classList.add('column');
        for(let j = 1; j <= size; j++ ){
            let row = document.createElement('div')
            row.classList.add('row');
            row.textContent = "";
            row.addEventListener('mouseover', () => {
                row.classList.add('orange')
            });
            column.appendChild(row);
        }
    container.appendChild(column);
    }
};

const input = document.querySelector('input');
const button = document.querySelector('button');


button.addEventListener('click', () => {
    let size = input.value;
    console.log(input.value);
    squareGrid(size);
    
})






