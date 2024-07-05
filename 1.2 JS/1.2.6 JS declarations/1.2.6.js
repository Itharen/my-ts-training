// VARIABLES -----------------------------------------------------------------------

// declarations
// when you need a changeable value that can be used multiple times, or just want something to be stored in the memory, you will use variables
// in order to use variables, you have to declare them first
// there are two main types of "variables": variables and constanses
// the difference is simple; the variable can be changed in the runtime, the constans can't

/*
  +++
  there are a few basic variable types;
    boolean (true or false),
    number,
    string (text, there are multiple ways to declare strings, with different quotation marks; 'text', "text", `text`),

    array (this will be explained later),
    object (this also will be explained later),

    function (you dont have to worry about this, but good to know, that functions are actually variables),

    undefined (this is not really a type, more like a flag),
    null (this is also more like a flag, which indicates that the value is defined as nothing)
  +++
*/

var age; 
let weight, height; // the difference between var and let, that var will couse an error if you trying to handle while undefined

const numberOfFingers = 20; // you always need to set value for a constans, otherwise it will be "undefined"

// now if you try to call a variable in the console, it will return its value
// the age, weight and height will be "undefined"

// on the following lines I will declare some functions to play with, but I won't call them, this will be your part
// try to call these functions and than inspect and try to understand the results

// if you want to start over, just refresh the page (F5), the memory will be wiped, and the script will start all over again*

// now set a value for our age variable
function getAge() {
  console.log(age);
  age = +prompt('What is your age? (please give only numbers)'); // the prompt is a predeclared JS function like console log, that will write out the input and will return what you write in the input field in a string
  // the +something operator will convert a string to a number
  console.log(age);
}

// now try to change age by increasing it
function increaseAge() {
  console.log(age);
  age++;
  console.log(age);
}
/* 
  these operators are the same:
  a = a + 1
  a += 1
  a++
*/

// in functions you can use input variables that can be changed in each and every call
// but if you declare a function with an input variable, it cannot be called without it
function setWeight(setTo) { // the name of setTo can be changed to anything
  console.log(weight);
  weight = +setTo;
  // the +something operator will convert a string to a number
  console.log(weight);
}

// variables declared in function will only live inside the function, so when the function is finished it won't exist anymore
function increase(innerFunctionVariable) {
  let anotherVariable = 'somehting';
  console.log(innerFunctionVariable, anotherVariable);
  innerFunctionVariable++;
  console.log(innerFunctionVariable, anotherVariable);
}
function testExistenceOfAnyValue() {
  console.log(innerFunctionVariable, anotherVariable);
}
