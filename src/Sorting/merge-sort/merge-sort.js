const mergeSort = array => {
  if (array.length <= 1) {
    return array
  }
  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);
  
  return merge(mergeSort(left), mergeSort(right))
}

const merge = (left, right) => {
  let storage = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex + rightIndex < left.length + right.length) {
    let leftElement = left[leftIndex];
    let rightElement = right[rightIndex];
    
    if (leftElement === null) {
      storage.push(leftElement)
      leftIndex++
    } else if (rightElement === null) {
      storage.push(rightElement)
      rightIndex++
    } else if (leftElement < rightElement) {
      storage.push(leftElement)
      leftIndex++
    } else {
      storage.push(rightElement)
      rightIndex++
    }
  }
  return storage;
}

let numz = [3, 5, 1, 2, 10, 6]
let test = mergeSort(numz)
console.log(test);
