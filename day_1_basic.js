// let a = 2;
// let b = "12";
// let c = 12;
// console.log(a + b);

// console.log("sum of 2 and 12 " + (a + c));
// console.log("sum of 2 and 12 " + a + c);
// console.log("1"-1); // 0 (string "1" becomes number 1)
// console.log("1"/1); // 1 (string "1" becomes number 1)
// console.log("1"%1); // 0 (string "1" becomes number 1)
// console.log("1"*1); // 1 (string "1" becomes number 1)
// console.log("1"+1); // 11 (number 1 becomes string)
// console.log("t"-1); // NaN (string "t" is not a valid number)

// // Prompt the user to input their age and convert it to a number
// let age = Number(prompt("Enter Your Age")); // type casting

// // Log the age to the console
// console.log(age);

// // Get the element with the class "prompt" from the DOM
// const query = document.querySelector(".prompt");

// // Display the age and its type inside the selected element
// query.innerHTML = age + " " + typeof age;

// Swap two numbers without using a temporary variable


// let b = 5;

// // Add b to a
// a = a + b;
// // Subtract new b from a (original a)
// b = a - b;
// // Subtract new b from a (original b)
// a = a - b;

// Swap two numbers using array destructuring
// [a, b] = [b, a];
// console.log(a, b);

// // Calculate and display the quotient of a divided by b
// console.log("Division of " + a + " and " + b + " is: " + Math.floor((a/b)));  

// // Calculate and display the remainder of a divided by b
// console.log("Remainder when " + a + " is divided by " + b + " is: " + (a%b));



// let a = 6343;    // Initial number we want to reverse
// let b = 0;       // Will store the reversed number

// while(a > 0){    // Loop continues as long as a is greater than 0
//     // Dry run:
//     // Iteration 1: a = 6343, b = 0
//     //    b = 0 * 10 + (6343 % 10)    → 0 + 3 = 3
//     //    a = Math.floor(6343 / 10)    → 634
    
//     // Iteration 2: a = 634, b = 3
//     //    b = 3 * 10 + (634 % 10)      → 30 + 4 = 34
//     //    a = Math.floor(634 / 10)      → 63
    
//     // Iteration 3: a = 63, b = 34
//     //    b = 34 * 10 + (63 % 10)      → 340 + 3 = 343
//     //    a = Math.floor(63 / 10)       → 6
    
//     // Iteration 4: a = 6, b = 343
//     //    b = 343 * 10 + (6 % 10)      → 3430 + 6 = 3436
//     //    a = Math.floor(6 / 10)        → 0

//     b = b * 10 + (a % 10);    // Multiply b by 10 and add last digit of a
//     a = Math.floor(a / 10);   // Remove last digit from a
// }
// console.log(b);   // Final output: 3436 (reversed number)


// Strict inequality: checks both value and type.
// "2" (string) is not strictly equal to 2 (number); returns true.
// console.log("2" !== 2);

// // Loose inequality: performs type coercion.
// // "2" (string) is coerced to 2 (number) so they are considered equal; returns false.
// console.log("2" != 2);

// // Checks if 2 is not equal to 0; returns true because 2 and 0 are different values.
// console.log(2 != 0);

// // Checks if 2 is not equal to 2; returns false because both values are the same.
// console.log(2 != 2);

// // Define a constant with a floating point number.
// const a = 12.343

// // Math.ceil rounds up the number to the nearest integer.
// console.log(Math.ceil(9.1));

// // Math.floor rounds down the number to the nearest integer.
// console.log(Math.floor(9.9));

// // Math.round rounds the number to the nearest integer.
// console.log(Math.round(10.1));

// // Math.round rounds the number to the nearest integer.
// console.log(Math.round(10.6));

// // Math.trunc removes the decimal part and only returns the integer part.
// console.log(Math.trunc(10.99));

// // Math.pow raises the first number to the power of the second (10^2).
// console.log(Math.pow(10, 2));

// // Math.sqrt returns the square root of the number.
// console.log(Math.sqrt(10));

// // Math.abs returns the absolute value of the number.
// console.log(Math.abs(-10));

// // Math.max returns the highest value in the list of numbers.
// console.log(Math.max(...[44, 10]));

// // Math.min returns the lowest value in the list of numbers.
// console.log(Math.min(...[44, 10]));

// // toFixed(1) rounds the number to 1 decimal place and returns it as a string. 
// // Number(...) converts it back to a number.
// console.log(Number(a.toFixed(1)));

// // Generates a random number between 1000 and 9999 (inclusive)
// console.log(Math.floor(Math.random() * 9000) + 1000);


