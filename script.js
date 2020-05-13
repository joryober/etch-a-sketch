let container = document.querySelector('.container');
let square = document.createElement('div');
square.classList.add('square');
let etch = document.querySelector('.etch');
let gridSize;

for (let i=0; i<4; i++){
    let newDiv = document.createElement('div');
    for(let j=0; j<4; j++){
        let square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseover', ()=>{
            square.classList.add('white');
        })
        newDiv.appendChild(square);

    }
    etch.appendChild(newDiv);
}

let btn = document.querySelector('.new');
btn.addEventListener('click', () => {
    gridSize = prompt('How many squares per side?');
    container.removeChild(etch);
    etch = document.createElement('div');
    etch.classList.add('etch');
    container.appendChild(etch);
    etch = document.querySelector('.etch');


    for (let i=0; i<gridSize; i++){
        for(let j=0; j<gridSize; j++){
            let square = document.createElement('div');
            square.classList.add('square-no-height');
            square.style.cssText = `height: ${200*(4/gridSize)}px; width: ${200*(4/gridSize)}px`;
            square.addEventListener('mouseover', ()=>{
                square.classList.add('white');
            })
            etch.appendChild(square);
        }
        let br = document.createElement('br');
        etch.appendChild(br);
    }
})