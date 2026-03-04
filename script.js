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
const complexity = {
    none: {
        best: "-",
        average: "-",
        worst: "-"
    },
    bubble: {
        best: "O(n)",
        average: "O(n²)",
        worst: "O(n²)"
    },
    selection: {
        best: "O(n²)",
        average: "O(n²)",
        worst: "O(n²)"
    },
    insertion: {
        best: "O(n)",
        average: "O(n²)",
        worst: "O(n²)"
    },
    merge: {
        best: "O(n log n)",
        average: "O(n log n)",
        worst: "O(n log n)"
    },
    quick: {
        best: "O(n log n)",
        average: "O(n log n)",
        worst: "O(n²)"
    }
};
const explanations = {
    none: "Select an algorithm to see how it works.",

    bubble: "Bubble Sort repeatedly compares adjacent elements and swaps them if they are in the wrong order. Larger elements gradually 'bubble' to the end of the array.",

    selection: "Selection Sort repeatedly selects the smallest element from the unsorted portion of the array and places it at the beginning.",

    insertion: "Insertion Sort builds the sorted array one element at a time by inserting each element into its correct position.",

    merge: "Merge Sort divides the array into halves recursively, sorts each half, and then merges the sorted halves together.",

    quick: "Quick Sort selects a pivot element and partitions the array so that elements smaller than the pivot go to the left and larger elements go to the right."
};
const bestCase = document.getElementById("best-case");
const avgCase = document.getElementById("avg-case");
const worstCase = document.getElementById("worst-case");
const explanationText = document.getElementById("algo-explanation");

//speed input
speedSlider.addEventListener("input", () => {
    delay = 510-speedSlider.value;
});

//array size input
sizeSlider.addEventListener("input", () => {
    if (isSorting) return;

    init(sizeSlider.value);
});

algorithmSelect.addEventListener("change", () => {
    updateComplexity(algorithmSelect.value);
    updateExplanation(algorithmSelect.value);
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
    
    container.innerHTML = "";
    arr.forEach(value => {
        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = `${value}px`;
        bar.style.width = `${barWidth}px`;
        container.appendChild(bar);
    });
}

//update time complexity
function updateComplexity(algo) {
    bestCase.textContent = complexity[algo].best;
    avgCase.textContent = complexity[algo].average;
    worstCase.textContent = complexity[algo].worst;
}

//update explanation
function updateExplanation(algo) {
    explanationText.textContent = explanations[algo];
}

function init(size = sizeSlider.value) {
    array = generateArray(size);
    renderArray(array);
    updateComplexity(algorithmSelect.value);
    updateExplanation(algorithmSelect.value);
}

generateBtn.addEventListener("click", () => {
    init(sizeSlider.value);
});

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