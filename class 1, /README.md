ধরো, তোমার একটা crush আছে 🐱
তাহলে তুমি তাকে খুব সহজেই একটা variable–এ রেখে দিতে পারো।
```js
let crushMemory = ["sadia"]
```
কিন্তু সমস্যা হলো 🤔
যদি তোমার একটার বেশি crush থাকে, তাহলে কী করবে?
কি, এরকম করে অনেকগুলো variable বানাবে?
```js
let crushMemory1 = ["sadia"]
let crushMemory2 = ["sumaiya"]
let crushMemory3 = ["sabrina"]
```
আর যদি ১০০টা crush থাকে?
তাহলে কি ১০০টা variable বানাতে হবে?
👉 উত্তর: না (NO) ❌
✅ সমাধান: Array
Array হলো এমন একটি variable
যার ভিতরে তুমি একসাথে অনেকগুলো value রাখতে পারো।
```js
let crushMemory = ["sadia", "sumaiya", "sabrina"]
```
এখানে
crushMemory → একটি array
"sadia", "sumaiya", "sabrina" → array–এর ভিতরের elements
🔢 Index কী?
আমরা সাধারণভাবে গোনা শুরু করি ১ থেকে
কিন্তু Programming–এ গোনা শুরু হয় ০ থেকে
তাই এই array–এ:
নাম
```js
Index
sadia
0
sumaiya
1
sabrina
2
```
📌 Array থেকে data বের করা
Array থেকে কোনো value বের করতে হলে
index number ব্যবহার করতে হয়।
```js
let crushMemory = ["sadia", "sumaiya", "sabrina"]

console.log(crushMemory[0]) // sadia
console.log(crushMemory[1]) // sumaiya
console.log(crushMemory[2]) // sabrina
👉 arrayName[index]
```
এই নিয়মে array থেকে যেকোনো data access করা যায়।
📘 Wikipedia অনুযায়ী Array (সহজ বাংলায়)
Array হলো একটি data structure
যেখানে অনেকগুলো value একসাথে রাখা যায়।
প্রতিটি value–কে আলাদা করে চেনা যায়
তার index number দিয়ে।
Index ব্যবহার করে computer খুব সহজেই বুঝে যায়
কোন data কোন position–এ আছে।
✨ সংক্ষেপে মনে রাখার জন্য
অনেকগুলো data একসাথে রাখতে → Array
Array–এর ভিতরের প্রতিটি data → Element
Element চেনার জন্য → Index
Index শুরু হয় → 0 থেকে
Access করার নিয়ম → 
```js
arrayName[index]
```
