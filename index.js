// 01. Check if a Year is a Leap Year
// Create a validation function that accepts an integer representing a calendar year and determines whether it is a leap year based on standard calendar rules (divisible by 4, except for end-of-century years, which must be divisible by 400).
// /**
//  * @param {number} year
//  * @return {boolean}
//  */
function isLeapYear(year){
    return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}

console.log(isLeapYear(2024));
