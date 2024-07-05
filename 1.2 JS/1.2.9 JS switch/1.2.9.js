// CONDITIONALS -----------------------------------------------------------------------

// conditionals are one of the main logic in programming
  // (in fact the computer will do everything in if statements, the lower compilers like C will compile every logic to this basic step)

// conditionals are always returning a boolean (true or false)

// the basic conditional statement operations are:
// ==   EQUAL
// !=   NOT EQUAL
// ===  EXACT SAME (this will check if equal, and types as well)
// !==  NOT EXACT SAME
// <    LESS THAN
// >    MORE THAN
// <=   LESS OR EQUAL
// >=   MORE OR EQUAL
// !    NEGATIVE (this will negate any result)
// ||   OR
// &&   AND

// these are going to be used by if-else statements (if { do } else { doelse }), and direct by conditional variable settings (if ? than : else)
// you can stack these however you want

// EVALUATIONS
/* 
  1 > 3       // false
  1 < 3       // true
  250 >= 250  // true
  1 === 1     // true
  1 === 2     // false
  1 === '1'   // false
 */

// OR:
/* 
  true || false;          // true
  10 > 5 || 10 > 20;      // true
  false || false;         // false
  10 > 100 || 10 > 20;    // false
  true || false || false; // true
*/

// AND:
/* 
  true && true;           // true
  1 > 2 && 2 > 1;         // false
  true && false;          // false
  4 === 4 && 3 > 1;       // true
  true && false && false; // false
*/

// NEGATION
/*
  !true;                  // false
  !false;                 // true
  !!true;                 // true
  !undefined;             // true
  !(1 == 1)               // false
  !(10 < 9)               // true
*/

// IF-ELSE
function firstTryOfIfElse() {
  const isTaskCompleted = false;
  
  // if-else statements are deciding, if the, condition or boolean...
  if (isTaskCompleted) {
    // .. is true, than this part will be executed
    console.log('Task completed');
  } else {
    // .. is false, than this part will be executed
    console.log('Task incomplete');
    // else part is always optional
  }
}

// this is a more complicated, but still simple if-else function
// if ( EVALUATION ) { DO } else { DO }
function secondTryOfIfElse() {
  const i = 100;

  if (i > 10) {
    if (i > 100) {
      if (i > 1000) {
        console.log('i is more than 1000!!!');
      } else {
        console.log("it's much."); // 100 < i < 1000
      }
    } else {
      console.log('i is more than 10, but less than 100.');
    }
  }
  // as you see, if i is less or equal to 10, the function wont do anything
}

// CONDITIONAL VARIABLE SETTING
// IF ? DO : ELSE // EVALUATION ? DO : ELSE DO
function firstTryOfConVarSet() {
  const a = 1;
  const b = 5;
  const day = "Sunday";
  
  // this will check if day is "Monday", than if it is, than gives a back, else it returns b
  console.log(day === "Monday" ? a : b);
  // keep in mind that if the day string is "monday", it will return b (false),
  // becouse in string the lower and upper case letters are count as different letters!!!
}


// The next code element is the SWITCH
// in the "if ( EVALUATION ) { DO } else { DO }"
// basically these parts "{ DO }" can be single functions
// with this approach, the statement can look like this as well: 
// if ( EVALUATION ) { DO } else if ( EVALUATION ) { DO }
/*
if ( EVALUATION ) {
  DO
} else if ( EVALUATION ) {
  DO
} else if ( EVALUATION ) {
  DO
}
*/
// but there is the next code element, the switch
function firstSwitchTry() {
  // I immediately set it to lower case, ensuring that it can handle upper case characters
  const food = prompt('What is your favorite meal?').toLocaleLowerCase(); 
  
  switch (food) {
    case 'pasta':
      console.log('Are you italian?');
      break;
    case 'lasagne':
      console.log('...and hates monday?');
      break;
    case 'hotdog':
      console.log('But not the animal, right?');
      break;
    case 'oyster':
      console.log('The taste of the sea 🦪');
      break;
    case 'pizza':
      console.log('A delicious pie 🍕');
      break;
    default:
      console.log('I dont recognize that... sry');
  }
}

// now try something a bit more complicated
function aBitMoreComplicatedFunction() {
  // if you remember, the + operator will convert the string from prompt to number
  const size = +prompt('Give a number');
  
  // isNaN is a JS function that decides if a value is Not-a-Number
  if (isNaN(size)) {
    console.log('The answer you gave is not a number!');
  } else {
    switch (size) {
      case 3:
      case 7:
      case 11:
        console.log('Thats a lucky number!');
        break;
      case 13:
        console.log('Thats an unlucky number!');
        break;
      default:
        if (size > 100) {
          console.log('Big');
        } else if (size > 20) {
          console.log('Medium');
        } else if (size > 4) {
          console.log('Small');
        } else {
          console.log('Tiny');
        }
    }
  }
}



