import { sleep } from "../utils/sleep.js";

export async function insertionSort(array, delay) {
    const bars = document.getElementsByClassName("bar");
    const n = array.length;

    for (let i = 1; i < n; i++) {

        let key = array[i];
        let j = i - 1;

        bars[i].style.backgroundColor = "red";
        await sleep(delay);

        while (j >= 0 && array[j] > key) {

            bars[j].style.backgroundColor = "red";
            await sleep(delay);

            array[j + 1] = array[j];
            bars[j + 1].style.height = `${array[j + 1]}px`;

            bars[j].style.backgroundColor = "turquoise";
            j--;
        }

        array[j + 1] = key;
        bars[j + 1].style.height = `${key}px`;

        bars[i].style.backgroundColor = "green";
    }

    // Make all bars green at end
    for (let k = 0; k < n; k++) {
        bars[k].style.backgroundColor = "green";
    }
}