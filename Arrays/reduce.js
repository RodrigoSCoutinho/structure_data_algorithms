// usando o method reduce para iterar sobre um array e retornar um novo array

const numbers = [1, 2, 3, 4, 5];

const sumNumbers = numbers.reduce((accumulator, item) => {

    return accumulator + item;

}, 0);

console.log(sumNumbers); // 15

//LEETCODE

// Given an array of integers, find the sum of its elements.

function simpleArraySum(ar) {
    return ar.reduce((accumulator, currentValue) => {
       return accumulator + currentValue;
    }, 0);
 }
 
 const array = [1, 2, 3, 4, 5];
 const sum = simpleArraySum(array);
 console.log(sum);