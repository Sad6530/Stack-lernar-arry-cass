// Array of Objects
const Arr_obj = [
    {name: "facebook", url: "www.facebook.com"},
    {name: "google", url: "www.google.com"},
    {name: "YouTube", url: "www.youtube.com"},
];

// console.log(Arr_obj)

// Array of Functions
const sum = (x, y) => (x + y);
const sub = (x, y) => (x - y);
const times = (x, y) => (x * y);
const div = (x, y) => (x / y);
const mod = (x, y) => (x % y);

const x = 15, y = 53;

const AllFun = [sum, sub, times, div, mod]
for (let i = 0; i < AllFun.length; i++){
  const result = AllFun[i](x, y);
  // console.log(`[${AllFun[i].name}] ruselt is = ${result}`);
  
}
// Array of Arrays - malty dimentional arr
const ArrOfArr = [
  [2, 9],
  [550, 35],
  [60, 45],
  [30, 35],
  [10, 37],
];
// 1D Array
for(let i = 0; i < ArrOfArr.length; i++){
  console.log(`point ${i} i = ${ArrOfArr[i][1]} and y = ${ArrOfArr[i][0]} `);
}
/**
 * point 0 i = 9 and y = 2 
 * point 1 i = 35 and y = 550 
 * point 2 i = 45 and y = 60 
 * point 3 i = 35 and y = 30 
 * point 4 i = 37 and y = 10 
 */

// 2D Array

// Matrix h,w 
