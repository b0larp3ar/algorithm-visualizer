import { sleep } from "../utils/sleep.js";

export async function mergeSort(array, delay) {
    await mergeSortHelper(array, 0, array.length - 1, delay);
}

async function mergeSortHelper(array, left, right, delay) {
    if (left >= right) return;

    const mid = Math.floor((left + right) / 2);

    await mergeSortHelper(array, left, mid, delay);
    await mergeSortHelper(array, mid + 1, right, delay);

    await merge(array, left, mid, right, delay);
}

async function merge(array, left, mid, right, delay) {
    const bars = document.getElementsByClassName("bar");

    let leftArr = array.slice(left, mid + 1);
    let rightArr = array.slice(mid + 1, right + 1);

    let i = 0;
    let j = 0;
    let k = left;

    while (i < leftArr.length && j < rightArr.length) {

        bars[k].style.backgroundColor = "red";

        await sleep(delay);

        if (leftArr[i] <= rightArr[j]) {
            array[k] = leftArr[i];
            bars[k].style.height = `${leftArr[i]}px`;
            i++;
        } else {
            array[k] = rightArr[j];
            bars[k].style.height = `${rightArr[j]}px`;
            j++;
        }

        bars[k].style.backgroundColor = "turquoise";
        k++;
    }

    while (i < leftArr.length) {
        bars[k].style.backgroundColor = "red";

        await sleep(delay);

        array[k] = leftArr[i];
        bars[k].style.height = `${leftArr[i]}px`;

        bars[k].style.backgroundColor = "turquoise";

        i++;
        k++;
    }

    while (j < rightArr.length) {
        bars[k].style.backgroundColor = "red";

        await sleep(delay);

        array[k] = rightArr[j];
        bars[k].style.height = `${rightArr[j]}px`;

        bars[k].style.backgroundColor = "turquoise";

        j++;
        k++;
    }
}