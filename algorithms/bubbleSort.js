import { sleep } from "../utils/sleep.js";

export async function bubbleSort(array, delay = 100) {
    const bars = document.getElementsByClassName("bar");

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {

            // Highlight bars being compared
            bars[j].style.backgroundColor = "red";
            bars[j + 1].style.backgroundColor = "red";

            await sleep(delay);

            if (array[j] > array[j + 1]) {

                // Swap values in array
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;

                // Update heights visually
                bars[j].style.height = `${array[j]}px`;
                bars[j + 1].style.height = `${array[j + 1]}px`;
            }

            // Reset color
            bars[j].style.backgroundColor = "turquoise";
            bars[j + 1].style.backgroundColor = "turquoise";
        }

        // Mark sorted part
        bars[array.length - i - 1].style.backgroundColor = "green";
    }
}