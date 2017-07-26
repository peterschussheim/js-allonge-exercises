// From Doug Crockford's JavaScript, The Good Parts

Array.matrix = function(numRows, numCols, initial) {
  let arr = []
  for (let i = 0; i < numRows; ++i) {
    var columns = []
    for (var j = 0; j < numCols; ++j) {
      columns[j] = initial
    }
    arr[i] = columns
  }
  return arr
}

let nums = Array.matrix(5, 5, 0)
console.log(nums[1][1]) // displays 0
let names = Array.matrix(3, 3, '')
names[1][2] = 'Joe'
console.log(names[1][2]) // display "Joe"
