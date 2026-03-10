/*//Task1
let a = 5;
let b = 10;

[a, b] = [b, a];

console.log("a =", a);
console.log("b =", b);
*/
/*
//Task2
function square(n) {
    return n * n;
}

for (let i = 1; i <= 10; i++) {
    console.log("Sqr", i, "=", square(i));
}
*/


//Task3
let arr = [10, 25, 5, 40, 15];

let largest = arr[0]; 

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}

console.log("Largest num=", largest); 
