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
  !!true;                 // true (double negation)
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

  if (10 < i) {
    if (100 < i) {
      if (1000 < i) {
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
    // becouse in string, the lower and upper case letters are count as different letters!!!
}

/* 
  +++
  you also can use other variable types as condition like;
  
  let something = 'have value';
  if (something) {
    ...
  }

  but you have to know, if you use this;
  this will be false when the variable is: 
    undefined, 
    null, 
    false, 
    '' (empty string), 
    0 (zero as number, but not when string!)
  +++
*/



