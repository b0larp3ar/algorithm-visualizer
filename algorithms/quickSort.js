import { sleep } from "../utils/sleep.js";

export async function quickSort(array, delay) {
    await quickSortHelper(array, 0, array.length - 1, delay);
}

async function quickSortHelper(array, low, high, delay) {
    if (low < high) {
        const pivotIndex = await partition(array, low, high, delay);

        await quickSortHelper(array, low, pivotIndex - 1, delay);
        await quickSortHelper(array, pivotIndex + 1, high, delay);
    }
}

async function partition(array, low, high, delay) {

    const bars = document.getElementsByClassName("bar");

    let pivot = array[high];
    bars[high].style.backgroundColor = "orange"; // pivot color

    let i = low - 1;

    for (let j = low; j < high; j++) {

        bars[j].style.backgroundColor = "red";
        await sleep(delay);

        if (array[j] < pivot) {

            i++;

            // swap values
            [array[i], array[j]] = [array[j], array[i]];

            // update bars
            bars[i].style.height = `${array[i]}px`;
            bars[j].style.height = `${array[j]}px`;
        }

        bars[j].style.backgroundColor = "turquoise";
    }

    // place pivot correctly
    [array[i + 1], array[high]] = [array[high], array[i + 1]];

    bars[i + 1].style.height = `${array[i + 1]}px`;
    bars[high].style.height = `${array[high]}px`;

    bars[high].style.backgroundColor = "turquoise";
    bars[i + 1].style.backgroundColor = "green";

    return i + 1;
}