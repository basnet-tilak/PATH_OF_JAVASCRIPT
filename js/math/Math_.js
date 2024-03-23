
/**
 * The syntax for any Math property is : Math.property.
 * Math.E        // returns Euler's number
 * Math.PI       // returns PI
 * Math.SQRT2    // returns the square root of 2
 * Math.SQRT1_2  // returns the square root of 1/2
 * Math.LN2      // returns the natural logarithm of 2
 * Math.LN10     // returns the natural logarithm of 10
 * Math.LOG2E    // returns base 2 logarithm of E
 * Math.LOG10E   // returns base 10 logarithm of E
 * 
 * 
 * Math.round(x)	Returns x rounded to its nearest integer
 * Math.ceil(x)	    Returns x rounded up to its nearest integer
 * Math.floor(x)	Returns x rounded down to its nearest integer
 * Math.trunc(x)	Returns the integer part of x (new in ES6)
 * 
 */

console.log("Value of E = "+Math.E);
console.log("Value of PI = "+Math.PI);

console.log("Round 5.5 = "+ Math.round(5.5));
console.log("Ceil of 5.2 = "+ Math.ceil(5.2));
console.log("Square of 9 = "+ Math.sqrt(9,2));  // 9 -> 3^2  = output: 3

console.log("Trunc value 5.7 = "+Math.trunc(5.7)); // 5
console.log("2 power 3 = "+Math.pow(3,2));
console.log("Abastract of 64 = "+ Math.abs(64));    // 64
console.log("Abastract of -4.5 ="+Math.abs(-4.5));   // 4.5 Always positive |-4.5| == 4.5

console.log(Math.log(3));

function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}
console.log(getRandomNumber(10, 100)); // Generate the random number from 10 to 100