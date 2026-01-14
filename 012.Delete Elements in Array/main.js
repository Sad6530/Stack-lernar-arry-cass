let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// remove fast elements
num.shift()
// 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13
// remove last elements 
num.pop()
// 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
num.length = num.length - 1
// 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
// remove inside elements - splice using index
num.splice(3, 1)
// 2, 3, 4, 6, 7, 8, 9, 10, 11
// remove inside elements - splice using value
const valo = 10
for(let i = 0; i < num.length; i++){
  if(valo == num[i]){
    num.splice(i, 1)
  }
};
// 2, 3, 4, 6, 7, 8, 9, 11
// filter Array
const valo1 = 9
num = num.filter((item) => item !== valo1)
// 2, 3, 4, 6, 7, 8, 11
// delete Oporetor
// num[1] = undefined
delete num[1]
// Reset whole Array
let x = [1, 2, 3]
let y = x 
x = []
console.log(x, y)
// x = 0 , y = [1, 2, 3]

// Alternative
let xx = [4, 5, 6]
let yy = []
xx.length = 0;
console.log(xx, yy)
// Reset[]

// Reset while loof 
while(num.length) num.pop()
// reset []
console.log(num) 
