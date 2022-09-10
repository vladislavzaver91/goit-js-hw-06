const inputRef = document.querySelector('#font-size-control');

const textRef = document.querySelector('#text');

textRef.style.fontSize = inputRef.value + 'px';

const onInputChange = (event) => {
    textRef.style.fontSize = `${event.target.value}px`;
}

inputRef.addEventListener('input', onInputChange);
