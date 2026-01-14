const arr = [1, 2, 3]
const arr1 = [4, 5, 6]

const arr2 = arr.concat(arr1)
const arr3 = [... arr, ...arr1]
const arr4 = [].concat(arr, arr1, 7, 8, 9, 10)
console.log(arr2) // [ 1, 2, 3, 4, 5, 6 ]
console.log(arr3) // [ 1, 2, 3, 4, 5, 6 ]

console.log(arr4) /** [
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]*/
