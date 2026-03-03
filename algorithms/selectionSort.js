import { sleep } from "../utils/sleep.js";

export async function selectionSort(array, delay) {
    const bars = document.getElementsByClassName("bar");
    const n = array.length;

    for (let i = 0; i < n; i++) {
        let minIndex = i;

        // Highlight current position
        bars[i].style.backgroundColor = "blue";

        for (let j = i + 1; j < n; j++) {

            // Highlight comparing bar
            bars[j].style.backgroundColor = "red";
            await sleep(delay);

            if (array[j] < array[minIndex]) {
                if (minIndex !== i) {
                    bars[minIndex].style.backgroundColor = "turquoise";
                }
                minIndex = j;
                bars[minIndex].style.backgroundColor = "yellow";
            } else {
                bars[j].style.backgroundColor = "turquoise";
            }
        }

        // Swap if needed
        if (minIndex !== i) {
            [array[i], array[minIndex]] = [array[minIndex], array[i]];

            bars[i].style.height = `${array[i]}px`;
            bars[minIndex].style.height = `${array[minIndex]}px`;
        }

        bars[i].style.backgroundColor = "green";
    }
}