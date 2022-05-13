// Data types
// A value in JavaScript is always of a certain type. For example, a string or a number.

// There are eight basic data types in JavaScript. 

// We can put any type in a variable. For example, a variable can at one moment be a string and then store a number:

// no error
let message = "hello";
message = 123456;
// alert(message)
// Number
let n = 123;
n = 12.345;
alert(n)
// The number type represents both integer and floating point numbers.

// There are many operations for numbers, e.g. multiplication *, division /, addition +, subtraction -, and so on.

// STRING
// A string in JavaScript must be surrounded by quotes.

let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

// In JavaScript, there are 3 types of quotes.

// Double quotes: "Hello".
// Single quotes: 'Hello'.
// Backticks: `Hello`.
// Double and single quotes are “simple” quotes. There’s practically no difference between them in JavaScript.

// Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}, for example:

let name = "John";

// embed a variable
alert( `Hello, ${name}!` ); // Hello, John!

// embed an expression
alert( `the result is ${1 + 2}` ); // the result is 3
// The expression inside ${…} is evaluated and the result becomes a part of the string. We can put anything in there: a variable like name or an arithmetical expression like 1 + 2 or something more complex.

// Please note that this can only be done in backticks. Other quotes don’t have this embedding functionality!

// Boolean
// The boolean type has only two values: true and false.

// This type is commonly used to store yes/no values: true means “yes, correct”, and false means “no, incorrect”.

// For instance:

let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked
// Boolean values also come as a result of comparisons:

let isGreater = 4 > 1;

alert( isGreater ); // true (the comparison result is "yes")


// The “null” value
// The special null value does not belong to any of the types described above.

// It forms a separate type of its own which contains only the null value:

let agee = null;
//  The special null value does not belong to any of the types described above.

// It forms a separate type of its own which contains only the null value:


// In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.

// It’s just a special value which represents “nothing”, “empty” or “value unknown”.

// The code above states that age is unknown.

// The “undefined” value
// The special value undefined also stands apart. It makes a type of its own, just like null.

// The meaning of undefined is “value is not assigned”.

// If a variable is declared, but not assigned, then its value is undefined:

let age;

alert(age); // shows "undefined"
// objects
let user = {     // an object
    name: "John",  // by key "name" store value "John"
    age: 30        // by key "age" store value 30
};