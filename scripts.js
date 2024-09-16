// let currentVal = "test";

const display = document.querySelector(".IO");
display.textContent = "";

const resetButton = document.querySelector(".clear");
function clear() {
    display.textContent = "";
}
resetButton.addEventListener("click", () => {
    clear();
});

const numButtons = document.querySelector(".keypad");
numButtons.addEventListener("click", (event) => {
    let target = event.target;
    display.textContent += target.id;
})