Multi Dimensional Array বোঝা (Understand Multi Dimensional Array)
ধরো, এখানে আমি একটি array বানিয়েছি যেখানে ৩টা element আছে।
এই element গুলো হলো: "sadia", "sumaiya", "sabrina" — এরা সবাই আমার crush 😄
এখন প্রশ্ন আসে 🤔
এই যুগে কি আমি শুধু ৩টা crush-এর নামই মনে রাখব?
নাকি তাদের
favorite color
birthday
habit
favorite food
এইসব তথ্যও মনে রাখতে চাইব?
তাহলে প্রশ্ন হলো 👉
এতগুলো তথ্য আমি কীভাবে store করব?
1D Array (One Dimensional Array)
এখন পর্যন্ত আমরা শিখেছি,
একটি variable-এর ভিতরে একাধিক value রাখার জন্য Array ব্যবহার করা যায়।
এটাকে বলা হয় 1D Array (One Dimensional Array)।
1D মানে এক মাত্রা —
যেটা দেখতে অনেকটা একটা সোজা লাইনের মতো।
কিন্তু 🤔
যদি আমরা টেবিলের মতো করে data রাখতে চাই?
যেখানে row আর column থাকবে?
2D Array (Two Dimensional Array)
এই সমস্যার সমাধান হলো 2D Array।
2D Array মানে:
Array এর ভিতরে Array
দেখতে অনেকটা Table এর মতো
চলো দেখি 👇
```Js
let crushMemory = [
  ["sadia", "sumaiya", "sabrina"],
  ["red", "blue", "green"],
  ["1st January", "2nd February", "3rd March"],
  ["pizza", "burger", "hotdog"],
];
```
2D Array কে Table আকারে কল্পনা করলে
```sadik
| Name    | Favorite Color | Birthday     | Favorite Food |
| ------- | -------------- | ------------ | ------------- |
| sadia   | red            | 1st January  | pizza         |
| sumaiya | blue           | 2nd February | burger        |
| sabrina | green          | 3rd March    | hotdog        |
```
এখানে:
প্রতিটি row একটা category
প্রতিটি column একই crush-এর তথ্য
2D Array থেকে Data Access করা
2D Array থেকে data বের করতে হলে
আমাদের দুটি index দিতে হয়:
```Copy code

arrayName[rowIndex][columnIndex]
```
চলো দেখি 👇
```Js
let crushMemory = [
  ["sadia", "sumaiya", "sabrina"],
  ["red", "blue", "green"],
  ["1st January", "2nd February", "3rd March"],
  ["pizza", "burger", "hotdog"],
];

console.log(crushMemory[0][0]); // sadia
console.log(crushMemory[0][1]); // sumaiya
console.log(crushMemory[0][2]); // sabrina

console.log(crushMemory[1][0]); // red
console.log(crushMemory[1][1]); // blue
console.log(crushMemory[1][2]); // green

console.log(crushMemory[2][0]); // 1st January
console.log(crushMemory[2][1]); // 2nd February
console.log(crushMemory[2][2]); // 3rd March

console.log(crushMemory[3][0]); // pizza
console.log(crushMemory[3][1]); // burger
console.log(crushMemory[3][2]); // hotdog
```
Data দিয়ে Information বানানো
এখন শুধু data রাখলেই হবে না ❌
এই data ব্যবহার করে meaningful information বানাতে হবে।
চলো দেখি 👇
```Js
let crushMemory = [
  ["sadia", "sumaiya", "sabrina"],
  ["red", "blue", "green"],
  ["1st January", "2nd February", "3rd March"],
  ["pizza", "burger", "hotdog"],
];

console.log(
  crushMemory[0][0] +
    " loves pizza and her favorite color is " +
    crushMemory[1][0] +
    ". Her birthday is " +
    crushMemory[2][0] +
    "."
);
// sadia loves pizza and her favorite color is red. Her birthday is 1st January.

console.log(
  crushMemory[0][1] +
    " loves burger and her favorite color is " +
    crushMemory[1][1] +
    ". Her birthday is " +
    crushMemory[2][1] +
    "."
);
// sumaiya loves burger and her favorite color is blue. Her birthday is 2nd February.

console.log(
  crushMemory[0][2] +
    " loves hotdog and her favorite color is " +
    crushMemory[1][2] +
    ". Her birthday is " +
    crushMemory[2][2] +
    "."
);
// sabrina loves hotdog and her favorite color is green. Her birthday is 3rd March.
🎉 Congratulations
```
এতদূর আসতে পারলে অভিনন্দন 🎉
তুমি শিখে ফেলেছো:
Array কী
1D Array কী
2D Array কী
2D Array থেকে data access
Data ব্যবহার করে information তৈরি করা
