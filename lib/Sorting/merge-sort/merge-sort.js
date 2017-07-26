"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }
    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}
exports.mergeSort = mergeSort;
/** Merge (conquer) step of mergeSort */
function merge(left, right) {
    const array = [];
    let lIndex = 0;
    let rIndex = 0;
    while (lIndex + rIndex < left.length + right.length) {
        const lItem = left[lIndex];
        const rItem = right[rIndex];
        if (lItem == null) {
            array.push(rItem);
            rIndex++;
        }
        else if (rItem == null) {
            array.push(lItem);
            lIndex++;
        }
        else if (lItem < rItem) {
            array.push(lItem);
            lIndex++;
        }
        else {
            array.push(rItem);
            rIndex++;
        }
    }
    return array;
}
let test1 = mergeSort([1, 2, 3, 4]);
// [1, 2, 3, 4]);
let test2 = mergeSort([3, 2, 1, 4]);
console.log(`
  ${test1}
  ${test2}
`);
// [1, 2, 3, 4]);
