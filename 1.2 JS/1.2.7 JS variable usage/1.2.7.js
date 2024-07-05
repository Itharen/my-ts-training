// VARIABLES -----------------------------------------------------------------------

// declarations
// when you need a changeable value that can be used multiple times, or just want something to be stored in the memory, you will use variables
// in order to use variables, you have to declare them first
// there are two main types of "variables": variables and constanses
// the difference is simple; the variable can be changed in the runtime, the constans can't

/*
  +++
  there are a few basic data types;
    boolean (true or false),
    number,
    string (text, there are multiple ways to declare strings, with different quotation marks; 'text', "text", `text`),

    array (this will be explained later),
    object (this also will be explained later),

    function (you dont have to worry about this, but good to know, that functions are actually variables, so you can operate with them, but this is far beyond your needs now.),

    undefined (this is not really a type, more like a flag),
    null (this is also more like a flag, which indicates that the value is defined as nothing)
  +++
*/

var age; 
let weight, yourName; // the difference between var and let, that var will couse an error if you trying to handle while undefined

const numberOfFingers = 20; // you always have to set value for a constans, otherwise it will be "undefined"
// you can try to change numberOfFingers value in console by numberOfFingers = 10; but you will experience an error message since this value is constans
// constans values will take less space in memory

// now if you try to call a variable in the console, it will return its value
// the age, weight and height will be "undefined"

// on the following lines I will declare some functions to play with, but I won't call them, this will be your part
// try to call these functions and than inspect and try to understand the results

// if you want to start over, just refresh the page (F5), the memory will be wiped, and the script will start all over again*

// now set value for our name and age variables
function getName() {
  // I only logged these variables to make these steps more transparent
  console.log('getName... (start) name:', yourName);
  // the prompt() is a predeclared JS function like console log, that will write out the input and will return what you write in the input field in a string
  yourName = prompt('What is your name?');
  console.log('getName... (end) name', yourName);
}

function getAge() {
  console.log('getAge... (start) age:', age);
  age = +prompt('What is your age? (please give only numbers)');
  // the +something operator will convert a string to a number
  console.log('getAge... (end) age:', age);
}

// now try to change the age by increasing it
function increaseAge() {
  console.log('increaseAge... (start) age:', age);
  age++;
  console.log('increaseAge... (end) age:', age);
}
/* 
  these operators are all the same:
  a = a + 1;
  a += 1;
  a++;
*/

// in functions you can use input variables that can be changed in each and every call
// but if you declare a function with an input variable, it cannot be called without it
function setWeight(setTo) { // the name of setTo can be changed to anything
  console.log('setWeight... (start) weight:', weight);
  weight = setTo;
  console.log('setWeight... (end) weight:', weight);
}

function increaseWeightBy(increaseBy) {
  console.log('increaseWeightBy... (start) weight:', weight);
  weight += increaseBy;
  console.log('increaseWeightBy... (end) weight:', weight);
}

// variables declared in function will only live inside the function, so when the function is finished it won't exist anymore
function increase(innerFunctionVariable) {
  let anotherVariable = 'somehting';
  console.log('increase... (middle) innerFunctionVariable:', innerFunctionVariable, 'anotherVariable:', anotherVariable);
  innerFunctionVariable++;
  console.log('increase... (end) innerFunctionVariable:', innerFunctionVariable, 'anotherVariable:', anotherVariable);
}
function testExistenceOfAnyValue() {
  console.log('testExistenceOfAnyValue... innerFunctionVariable:', innerFunctionVariable, 'anotherVariable:', anotherVariable);
}


// now I will show some practices about variable usages
function consoleLogNameLength() {
  // there are basic functions in JS that can be used like..:
  console.log('consoleLogNameLength... name length:', yourName.length);
}

// here are some more basic function examples (TRY THEM):
// console.log('Teaching the world how to code'.length); 
// console.log('hello'.toUpperCase());
// console.log('Hey'.startsWith('H'));
// console.log('Codecademy'.toUpperCase());
// console.log('    Remove whitespace   '.trim());
// Math functions;
// console.log(Math.random());
// console.log(Math.floor(Math.random() * 100));
// these functions have documentation here, as mentioned before: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// also dont forget to try the functions declared here!

// whit these specific symbols: ``, ${}, you can insert data to a string like this:
function insertDataToString() {
  let name = "Codecademy";
  console.log(`Hello, ${name}`);   
  console.log(`Billy is ${6+8} years old.`);
}

function messageSample() {
  let service = 'credit card';
  let month = 'May 30th'; 
  let displayText = `Your ${service} bill is due on ${month}.`;
  
  alert(displayText);
}


