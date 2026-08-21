// 01. Check if a Year is a Leap Year
// Create a validation function that accepts an integer representing a calendar year and determines whether it is a leap year based on standard calendar rules (divisible by 4, except for end-of-century years, which must be divisible by 400).
// /**
//  * @param {number} year
//  * @return {boolean}
//  */
function isLeapYear(year){
    return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}

console.log("1.",isLeapYear(2024));

// ------------------------------------------------------------
// ------------------------------------------------------------

// 02. Generate Fibonacci Sequence Up to N Terms
// Write a mathematical function that takes an integer n and returns an array containing the first n numbers of the Fibonacci sequence starting from 0 and 1.
// /**
//  * @param {number} n
//  * @return {number[]}
//  */
function generateFibonacci(n) {
    const result = [0, 1];

    for (let i = 2; i < n; i++) {
        result.push(result[i - 1] + result[i - 2]);
    }

    return result.slice(0, n);
}

console.log("2.", generateFibonacci(7));




