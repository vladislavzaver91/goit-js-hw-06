const inputRef = document.querySelector('#validation-input');

const handleValidInput = (event) => {
    const { dataset, value } = event.target;
    const requiredLength = Number(dataset.length);
    
    if (requiredLength === value.length) {
        changeClass('valid', 'invalid', event.target);
    }
    else {
        changeClass('invalid', 'valid', event.target);
    }
};

inputRef.addEventListener('blur', handleValidInput);

function changeClass(add, remove, elem) {
    elem.classList.add(add);
    elem.classList.remove(remove);
}