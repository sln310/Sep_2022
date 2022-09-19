/**
 * 
 * Javascript coding task 1
 * 
 * ---description---
 * Write a function that will take a student's grade and print out if they passed or failed the exam.
 * - if the student's grade is 70 or higher, print "passed"
 * - if the student's grade is below 70, print "failed"
 * - if the student's grade is 100, print "perfect score"
 * - if the student's grade is below 0, print "invalid grade"
 * - if the student's grade is not a number, print "invalid grade"
 * ---example---
 * studentGrade(100) // "perfect score"
 * studentGrade(70) // "passed"
 */

function studentGrade(score) 

// if (score == 100) { 
//     console.log("perfect score");
// } else if (score >= 70) {
//     console.log("passed");
// } else if (score < 70) {
//     console.log("failed");
// } else if (score < 0) {
//     console.log("invalid grade");
// } else {
//     console.log("invalid grade");
// }
// }
// studentGrade(70);

// - Put the score < 0 above score < 70, if not the sequence will mention fail if score is -1 (which should be invalid)
// Correction code is below:

if (score == 100) { 
    console.log("perfect score");
} else if (score >= 70) {
    console.log("passed");
} else if (score < 0) {
    console.log("invalid grade");
} else if (score < 70) {
    console.log("failed");
} else {
    console.log("invalid grade");
}



//-----------------------------------------------------------------------------------------------//

/**
 * 
 * Javascript coding task 2
 * 
 * ---description---
 * Write a function that will take a number and print out if it is even or odd.
 * - if the number is even, print "even"
 * - if the number is odd, print "odd"
 * - if the number is not a number, print "invalid number"
 * - if the number is less than 0, print "invalid number"
 * - if the number is 0, print "even"
 */

function test(number) {

// let number = 6;

if (number % 2 == 0) {
    console.log("even"); 
} else if (number % 2 == 1) {
    console.log("odd");
} else if (number < 0) {
    console.log("invalid number");
} else if (nnumber == 0 ) {
    console.log("even");
} else {
    console.log("invalid number");
}
}

test(9);

//-----------------------------------------------------------------------------------------------//

/**
 * 
 * Javascript coding task 3
 * 
 * ---description---
 * Write a function that will take a number and print out if it is positive, negative, or zero.
 * - if the number is positive, print "positive"
 * - if the number is negative, print "negative"
 * - if the number is 0, print "zero"
 * - if the number is not a number, print "invalid number"
 */

 function test2(num) {
//  const num = -5;

 if (num > 0) {
     console.log("positive"); 
 } else if (num < 0) {
     console.log("negative");
 } else if (num == 0 ) {
     console.log("zero");
 } else {
     console.log("invalid number");
 }
}

test2(-5);
//-----------------------------------------------------------------------------------------------//

/**
 * 
 * Javascript coding task 4
 * 
 * ---description---
 * Write a function that will take a person object and print out if they are a minor or an adult.
 * - if the person is a minor, print "minor"
 * - if the person is an adult, print "adult"
 * - if the person is not a number, print "invalid person"
 * ---example---
 * const person = {
 *   name: "John",
 *   age: 25
 * }
 * 
 * isMinor(person) // "adult"
 * 
 */



// function test3(person) {



    function isMinor(person) {
    if (person.age <= 20 ) {
        console.log('minor');
    } else if (person.age >= 20) {
        console.log('adult');
    } else {
        console.log('invalid person');
    }
}

const personA = {
    name: "John",
    age: 0
};

//isMinor(personA);
console.log(isMinor(personA));

//-----------------------------------------------------------------------------------------------//

/**
 * 
 * Javascript coding task 5
 * 
 * ---description---
 * Write a function that will concatenate two strings together.
 * - if the first string is not a string, print "invalid string"
 * - if the second string is not a string, print "invalid string"
 * - if both strings are not strings, print "invalid strings"
 * - if both strings are strings, print the concatenated string
 * ---example---
 * concatStrings("hello", "world") // "helloworld"
 * concatStrings("hello", 1) // "invalid string"
*/

function concatStrings(String1, String2) {

if (typeof String1 !== "string" && typeof String2 !== "string") {
    console.log("invalid string");
} else if (typeof String1 == "string" && typeof String2 !== "string") {
    console.log("invalid string");
} else if (typeof String1 !== "string" && typeof String2 !== "string") {
    console.log("invalid string");
} else if (typeof String1 == "string" && typeof String2 == "string") {
    console.log(String1 + " " +  String2);
} else {
    console.log("invalid string");
}

}

concatStrings(5, "world");
