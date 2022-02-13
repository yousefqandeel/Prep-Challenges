'use strict';

const { array } = require("yargs");

// -------------------------------------------------------------------------------------------------------
//  Challenge 01:
//  Required:
//
//  Write a function that takes an array and returns the maximum value in the provided array
//  without using build-in functions.
//  
// Input: [12, 32, 22, 45, 78, 12, 50]
// Output: 78
//  
var arr = [12, 32, 22, 45, 78, 12, 50];
const findMax = (arr) => {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
//  Challenge 02:
//  Required:
//
//  Write a function that takes an arrays and returns the Sum of the numeric values
//  inside the array (there could be strings inside), without using built-in functions
//  
// Input: [20, '234', 'car', 41, 20, 'chair']
// Output: 81
//  
var arr2 = [20, "234", "car", 41, 20, "chair"];
const sumNums = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr2.length; i++) {
        sum = arr[i] + sum;
    }
    return sum;
}


// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
//  Challenge 03:
//  Required:
//
//  Write a function that takes an array and returns the array reversed
//  without using built-in functions
//  
// Input: ['C#', 'JS', 'Ruby','Python'] 
// Output: ['Python','Ruby','JS','C#']
var arr1 = [1, 2, 3, 4, 5];
const reverseArray = (arr) => {
    var arr1 = arr;
    var arr2 = [];
    for (i = arr.length - 1; i >= 0; i--) {
        arr2.push(arr1[i]);
    }
    return arr2;
}

// -------------------------------------------------------------------------------------------------------

module.exports = { findMax, sumNums, reverseArray };