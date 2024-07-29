"use strict";
//Question 1
let arr = [1, 2, 3, 4, 5];
function sumArray(arr) {
    return arr.reduce((a, b) => a + b);
}
let sum = sumArray(arr);
console.log(sum);
// Question 2
function reverseString(str) {
    let ArrStr = str.split("");
    let reverseStr = ArrStr.reverse().join("");
    return reverseStr;
}
let reverseStr = reverseString("hello");
console.log(reverseStr);
