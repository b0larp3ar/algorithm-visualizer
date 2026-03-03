export function generateArray(size = 30) {
    const array = [];

    for (let i = 0; i < size; i++) {
        array.push(Math.floor(Math.random() * 300) + 20);
    }

    return array;
}