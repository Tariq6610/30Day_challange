"use strict";
// Question 3
function EdgeElements(arr) {
    let newArr = [];
    if (arr.length <= 1) {
        newArr = arr;
    }
    else {
        newArr.push(arr[0], arr[arr.length - 1]);
    }
    return newArr;
}
console.log(EdgeElements([1, 2, 3, 4]));
console.log(EdgeElements([8]));
console.log(EdgeElements([]));
// Question 4
function largestElement(arr) {
    let largestNum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largestNum) {
            largestNum = arr[i];
        }
    }
    return largestNum;
}
console.log(largestElement([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(largestElement([5, 4, 3, 2, 1]));
console.log(largestElement([1]));
