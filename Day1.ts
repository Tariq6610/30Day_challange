//Question 1
let arr = [1, 2, 3, 4, 5];

function sumArray(arr: number[]) {
  return arr.reduce((a, b) => a + b);
}

let sum = sumArray(arr);
console.log(sum);


// Question 2
function reverseString(str: string){
    let ArrStr = str.split("");  // converted the string into an array
    let reverseStr = ArrStr.reverse().join("")  //reversed the array then converted back to the string
    return reverseStr
}

let reverseStr = reverseString("hello");
console.log(reverseStr);




