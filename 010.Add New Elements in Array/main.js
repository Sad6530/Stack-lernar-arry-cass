 // Use push to insert at the end
 var arr = [1, 2, 3, 4, 5,]
 var arr1 = [1, 5, 7, 55, 88]
 arr[arr.length] = 6
 arr.push(7, 8, 9, 10)
  for (let i = 0; i < arr.length; i++){
      console.log(arr[i])
  }
arr.push(...arr1)
console.log(arr)
Array.prototype.push.apply(arr, arr1)


// Use unshift to insert at the beginning

const arruns = [4, 5, 6, 7, 8,]
const arruns1 = [-3, -5, -1]
arruns.unshift(1, 2, 3)
// arruns.unshift(... arruns1)
Array.prototype.unshift.apply(arruns, arruns1)
console.log(arruns)

 // Use Splice to insert at the given index
const arrspc = [1, 3, 5, 7]
arrspc.Splice(1, 0, 2)
console.log(arrspc)
