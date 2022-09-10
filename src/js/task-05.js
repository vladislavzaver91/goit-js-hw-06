

const textInputRef = document.querySelector('#name-input');
const textOutputRef = document.querySelector('#name-output');


const handleInputName = (event) => {
    const {value} = event.currentTarget;
    textOutputRef.textContent = value ? value : 'Anonymous';
};

textInputRef.addEventListener('input', handleInputName);