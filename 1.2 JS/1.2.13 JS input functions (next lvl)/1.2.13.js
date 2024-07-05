// FUNCTIONS -----------------------------------------------------------------------
// !!!!! NEXT LEVEL !!!!! ----------------------------------------------------------
// only proceed if you are confident with what you learned so far

// since functions can be used as variables, functions can use input functions

// the callBack functions are called when the parent function is done with its purpose
// this is a sample of how callback functions are working
function fvWithCallBackSample(callBack) {
  // do something
  console.log('executing some codes');
  callBack();
}
fvWithCallBackSample(() => { 
  console.log('callBack called') 
});

// the evaluation functions are called within the specific function to do different executions
// this is a samplce of how evaluation functions are working
function fvWithEvaluationFvSample(evaluation) {
  console.log('starting function...');
  if (evaluation()) {
    console.log('returning A');
    return 'A';
  } else {
    console.log('returning B');
    return 'B';
  }
}
const a = 1;
const b = 3;
// as you see below we are putting a function in to a function
  // but keep in mind that the usages are always strict, so if you want to use a function as an evaluation, 
    // than that function will have to return an evaluation!
      // this is why the typescript will have much advantage
console.log(
  fvWithEvaluationFvSample(() => { 
    return a > b 
  })
);

// callback functions are usually used for asyncronous functions, like http calls
// so they will be called when the response coming back from the server

// evaluation functions are usually used for array* filtering
  // arrays will come in the next lesson

// also keep in mind that not only this two types of input functions are existing,
  // these are just the most common usecases for input functions

