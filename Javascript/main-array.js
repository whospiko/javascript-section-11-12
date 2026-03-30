let arr = ["a", "b", "c", "d", "e", "f"];
function myArray(item, index) {
    console.log(`index ${index} : ${item}`);
}

arr.forEach(myArray)

arr.forEach((item, idx) => {
    console.log(`item ${idx} : ${item}`);
})

for(let i = 0; i < arr.length; i++) {
    console.log(`item ${i} : ${arr[i]}`);
}

const myFunction = () => {
    console.log("HelloWorld")
}
myFunction();
