// FUNCTIONS -----------------------------------------------------------------------

// as I showed before, you can add input variables to fuctions
// also you can declare variables in functions, that will only live inside function

// functions also can return a value from the function
// note that if the function is returned, that function won't run further

// the main concept of functions is that; you will have to create function for everything that should run more than once
// also if a function makes the code more transparent, you should create one for it

// (((recursive funcion means that a function calls itself until it gets the expected value)))


// the following lines about a simple code with more functions, that are calling each other until they get the right answer
// for now just try to understand, how this will run
// also try to run it with getAnswers() in the console

let answer1;
let answer2;

function getAnswers() {
  answer1 = prompt('Say 1');
  answer2 = prompt('Say 1, 2 or 3');
  evaluateAnswer();
}

function evaluateAnswer() {
  if(answer1 == 1) {
    console.log('1!! yesss!');
    console.log('now lets see the second answer...');
    switch (answer2) {
      case '1':
        console.log('1! yesss thats a correct answer!');
        break;
      case '2':
        console.log('2!! yesss thats a correct answer!');
        break;
      case '3':
        console.log('3!!! yesss!!! 3!!!');
        break;
      default:
        console.log('nooo... why is that so hard? try again!');
        getAnswers();
        break;
    }
  } else {
    console.log('nooo... thats not 1... try again!');
    getAnswers();
  }
}

// getAnswers();

// I already showed, and told you about function with input parameters, but this funcion has a return value.
// return values will take place, where you call the function.
// try to call the following function with different inputs

// keep in mind that the results should be different, if you use different types than numbers
function sum(num1, num2) {
  return num1 + num2;
}

// now try to understand how the return value will take place...
  // like if you call it like this: console.log(sum(3, 6) + sum(1, sum(5, -10)))
  // keep in mind that these are executed in order from inside out, 
  // so in this case the first that will be executed is the: sum(5, -10)
  // you can break down this (like everywhere else) for deeper understanding, like this: 
function sumFvTestingConsoleLogs() {
  console.log(`sum(3, 6) + sum(1, ${sum(5, -10)})`);
  console.log(`${sum(3, 6)} + ${sum(1, sum(5, -10))}`);
  console.log(sum(3, 6), + sum(1, sum(5, -10)));
}

// The parameter is name
function sayHello(name) {
  return `Hello, ${name}!`;
}


// so an important thing about function variables that they are only existnig inside the function
// so even if you are changing the value on the inside of a function, it will not effect the one outside
let outer = 3;

function addOne(inner) {
  inner++;
}

function testAddOne() {
  console.log('outer before testAddOne call', outer);
  addOne(outer);
  console.log('outer after testAddOne call', outer);
}

// but we can use functions to do specific changes and use the return values
function addTwo(inner) {
  inner += 2;
  return inner;
}

// the functions are also can access and modify outer variables as well
function testAddTwo() {
  console.log('outer before testAddTwo call', outer);
  outer = addTwo(outer);
  console.log('outer after testAddTwo call', outer);
}

// but keep in mind that if you create a variable inside a function, that will only live inside the function
function innerOuterVariables(inner) {
  // if you name a variable inside a function the same as outside the function, this will refer the inner one
  let outer = 12;
  outer++;
  console.log('outer in innerOuterVariables', outer);
  console.log('inner in innerOuterVariables', inner);
}

function testInnerOuter() {
  console.log('outer in testInnerOuter before innerOuterVariables', outer);
  innerOuterVariables(outer);
  console.log('outer in testInnerOuter after innerOuterVariables', outer);
}

