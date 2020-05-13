let square = document.createElement('div');
square.classList.add('square');
let etch = document.querySelector('.etch');
for (let i=0; i<4; i++){
    for(let j=0; j<4; j++){
        let square = document.createElement('div');
        square.classList.add('square');
        etch.appendChild(square);
    }
    let br = document.createElement('br');
    etch.appendChild(br);
}