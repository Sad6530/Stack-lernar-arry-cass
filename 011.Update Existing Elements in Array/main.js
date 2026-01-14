// Easy one
const arr = [1, 12, 66, 80, 15, 77]
arr[2] = 55
console.log(arr)

// array fo object
const arry = [
    {id: 1, name:"sadik"},
    {id: 2, name:"abida"},
    {id: 3, name:"sabid"},
    {id: 4, name:"tanvir"}
]
const sid = 4
const updatename = "mahfuj ahmad"
for (let i = 0; i < arry.length; i++){
    if (sid == arry[i].id){
        arry[i].name = updatename
    }
}
console.log(arry)
