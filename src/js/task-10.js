function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnCreateRef = document.querySelector('button[data-create]');
const btnDestroyRef = document.querySelector('button[data-destroy]');
const inputRef = document.querySelector('input');
const boxesRef = document.querySelector('#boxes');

function createBoxes (inputRef){
  for (let i = 0; i < inputRef.value; i += 1) {
    boxesRef += `<div style=backgroundColor: ${getRandomHexColor()}; width:= ${30 + i * 10}; heigth:= ${30 + i * 10}></div>`;
  };
};

const getInputData =() => {
  inputRef.addEventListener('submit', () => {
    return parseInt(inputRef.value);
  });
};

function amount () {
  btnCreateRef.addEventListener('click', getInputData);
};

