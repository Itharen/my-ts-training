// INTRODUCTION -----------------------------------------------------------------------

// JavaScript files are going to be compiled by the browser as you read, from top to bottom, from left to right

// JavaScript functions can be found in javascript documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// this is a commented line, this won't be compiled

/* 
  you also can use multiple line commenting with this,
    also, this can be added or removed automatically in Visual Studio Code, after highlight, with: shift + alt + a
*/

// this is a declaration of a function
function helloWorld () {
  alert( 'Hello, world!' );
}
// the spaces between different sections and line breaks in code are only for transparency, so the code will be compiled the same way if you remove all of them like this:
function helloWorld(){alert('Hello, world!');}
// also since I redeclared the function with the same name (helloWorld), the second one will overwrite the first one

// helloWorld(); // this will call the already declared helloWorld function, you also can call this from the browser's console
// while you learning, always try these things in console
// you also can paste the whole code in console as well, but try avoid this and use the least code to test these
// play with the codes! make your own copies from these lessons and rewrite them

// dont spend too much time memorizing syntaxes, you can find them any time on the internet!
// your only task is to understand the concepts

// I commented the helloWorld function call, preventing to run, becouse "alert()" function will always stops the script at this point
  // you also can use "alert()" when, you want your code to stop on a certain point


// in the next steps, I will show you, how to create variables, and how to manage them

// one of the most used function is console.log (this is included in the browser)
/* console.log('Hello World!');
console.log(34);
console.log(true); */

// these are different type of values (string, number, boolean)
  // in other programming language you have to declare these data types differently
    // but in JS (JavaScript), you will use the 'var' operator
      // but keep in mind that you have to handle these types differently!

// the code will always run like waterfall, from the first line of code to the last
/* 
  now I will move the console log samples to a function, so on the next step, it can be easily removed from execution, 
    without removing it (the already declared functions can always be executed from console) 
*/

function consoleLogSamples() {
  console.log('Hello World!');
  console.log(34);
  console.log(true);
  console.log('XYZ', 23, false); // these are the 3 main type of values: string, number, boolean(true or false)
}
// but if I dont call consoleLogSamples(), it won't run

// now I introduce some operators, like +, -, *, /, %
function consoleLogOperatorSamples() {
  // I will add some text before the calculated values to make it more transparent
  console.log('3 + 4 = ', 3 + 4); // plus
  console.log('3 - 4 = ', 3 - 4); // minus
  console.log('3 * 4 = ', 3 * 4); // multiply
  console.log('3 / 4 = ', 3 / 4); // divide
  // and this is a tricky one, this will divide the number, and then returns the remains:
  console.log('3 % 4 = ', 11 % 3); // division with remainder
  console.log('3 % 4 = ', 12 % 3);

  // keep in mind that, code will consider mathematical operation priorities
  // you should always use brackets, to keep your code transparent
  console.log('3 + 4 * 15 = ', 3 + 4 * 15);
  console.log('(3 + 4) * 15 = ', (3 + 4) * 15);

  // you can concatenate string with +
  console.log('Hello' + ' ' + 'wolrd!');
  console.log(3 + ' cats in the room');
  console.log('There are ' + 4 + ' cats');
}
// now I need to call this function to run
consoleLogOperatorSamples();

// in the next lesson these codes will be removed, but exercise is the key to everything

