const elemBtnRef = document.querySelector("#counter");
const decrementBtnRef = elemBtnRef.firstElementChild;
const incrementBtnRef = elemBtnRef.lastElementChild;
const valueRef = document.querySelector("#value");

let counterValue = 0;

decrementBtnRef.addEventListener("click", () => {
    counterValue -= 1;
    valueRef.textContent = counterValue});

incrementBtnRef.addEventListener("click", () => {
    counterValue += 1;
    valueRef.textContent = counterValue});
