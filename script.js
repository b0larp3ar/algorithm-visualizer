import { generateArray } from "./utils/generateArray.js";
import { bubbleSort } from "./algorithms/bubbleSort.js";
import { selectionSort } from "./algorithms/selectionSort.js";
import { insertionSort } from "./algorithms/insertionSort.js";
import { mergeSort } from "./algorithms/mergeSort.js";
import { quickSort } from "./algorithms/quickSort.js";

//variables
const container = document.getElementById("array-container");
const generateBtn = document.getElementById("generate");
const algorithmSelect = document.getElementById("algorithm");
const startBtn = document.getElementById("start");
const speedSlider = document.getElementById("speed");
const sizeSlider = document.getElementById("size");
let delay = 100;
let isSorting = false;
let array = [];

//speed input
speedSlider.addEventListener("input", () => {
    delay = 510-speedSlider.value;
});

//array size input
sizeSlider.addEventListener("input", () => {
    if (isSorting) return;

    init(sizeSlider.value);
});

//disable-enable controls
function disableControls() {
    generateBtn.disabled = true;
    startBtn.disabled = true;
    speedSlider.disabled = true;
    sizeSlider.disabled = true;
}
function enableControls() {
    generateBtn.disabled = false;
    startBtn.disabled = false;
    speedSlider.disabled = false;
    sizeSlider.disabled = false;
}

//array to bars
function renderArray(arr) {
    const barWidth = Math.max(800 / arr.length, 2);
    bar.style.width = `${barWidth}px`;
    container.innerHTML = "";
    arr.forEach(value => {
        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = `${value}px`;
        container.appendChild(bar);
    });
}

function init(size = sizeSlider.value) {
    array = generateArray(size);
    renderArray(array);
}

generateBtn.addEventListener("click", init);

startBtn.addEventListener("click", async () => {
    if (isSorting) return;
    isSorting = true;
    disableControls();
    const selectedAlgorithm = algorithmSelect.value;
    switch(selectedAlgorithm){
        case "none":
            console.log("Select an algorithm");
            break;
        case "bubble":
            await bubbleSort(array, delay);
            break;
        case "selection":
            await selectionSort(array, delay);
            break;
        case "insertion":
            await insertionSort(array, delay);
            break;
        case "merge":
            await mergeSort(array, delay);
            break;
        case "quick":
            await quickSort(array, delay);
            break;
    }
    enableControls();
    isSorting = false;
});

init();