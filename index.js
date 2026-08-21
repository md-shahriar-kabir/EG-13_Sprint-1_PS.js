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

// ------------------------------------------------------------
// ------------------------------------------------------------


// 03. Calculate the Greatest Common Divisor (GCD)
// Implement a function that computes the Greatest Common Divisor (GCD) of two non-negative integers using Euclid's algorithm.
// /**
//  * @param {number} a
//  * @param {number} b
//  * @return {number}
//  */
function findGCD(a, b) {
    while (b !== 0) {
        let remainder = a % b;
        a = b;
        b = remainder;
    }

    return a;
}

console.log("3.", findGCD(48, 18));


// ------------------------------------------------------------
// ------------------------------------------------------------

// 04. Calculate the Least Common Multiple (LCM)
// Construct a math function that calculates the Least Common Multiple (LCM) of two positive integers using their Greatest Common Divisor.
// /**
//  * @param {number} a
//  * @param {number} b
//  * @return {number}
//  */
function findLCM(a, b) {
    function findGCD(a, b) {
        while (b !== 0) {
            let remainder = a % b;
            a = b;
            b = remainder;
        }

        return a;
    }

    return (a * b) / findGCD(a, b);
}

console.log("4.", findLCM(12, 18));

// ------------------------------------------------------------
// ------------------------------------------------------------

// 05. Check if a Number is Prime
// Build a primality testing function that evaluates whether a given positive integer is a prime number.
// /**
//  * @param {number} num
//  * @return {boolean}
//  */
function isPrime(num) {
    if (num < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(29));






