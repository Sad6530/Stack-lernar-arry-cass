let arr = []
for (let i = 0; i < 100; i++) {
    let m = Math.floor(Math.random() * 100) + 1;
    arr.push(m);
}

console.log(arr)
let big = arr[0];
let sec_big = arr[0];

for(let s = 1; s < arr.length; s++){
  if(arr[s] > big){
    sec_big = big;
    big = arr[s];
  } else if(arr[s] > sec_big && arr[s] < big){
    sec_big = arr[s];
  }
}

console.log("big", big);
console.log("sec_big", sec_big);
