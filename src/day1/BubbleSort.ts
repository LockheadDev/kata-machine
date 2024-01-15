export default function bubble_sort(arr: number[]): void {
    let i = 0;
    do {
        for (let j = 0; j < arr.length - 1 - i; j++) {// each time we have to -i because bubble sort will always put the highest value on th right side of the array, also the -1 is to avoid going arrayout of bounds...
            if (arr[j] > arr[j + 1]) {
                const temp: number = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        i++;
    } while (i < arr.length);

}