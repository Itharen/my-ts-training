// ARRAYS -----------------------------------------------------------------------
// an array is basically a list of data
// were are using these type of parentheses for arrays: []
// arrays are having a special property that is always referring to its length, and its called .lenght

const numbers = [1, 2, 3, 4];

numbers.length // 4

// on arrays you can get a specific data by its index the following way
// keep in mind that array indexes are starting with 0!

// Accessing an array element
const myArray = [100, 200, 300];

function testArrayElementCalling() {
  console.log(myArray[0]); // 100
  console.log(myArray[1]); // 200
  console.log(myArray[2]); // 300
}

// arrays are also having built in functions that can be used
// like .push() is for adding elements to the array

// Adding a single element:
const cart = ['apple', 'orange'];

function testPushOnCart() {
  console.log('before push', cart);
  cart.push('pear');
  console.log('after push', cart);
}

// Adding multiple elements:
const numbers = [1, 2];

function testPushOnNumbers() {
  console.log('before push', numbers);
  numbers.push(3, 4, 5);
  console.log('after push', numbers);
}

// .pop() is returning the last element and removing it from the array

const ingredients = ['eggs', 'flour', 'chocolate'];

function testPop() {
  const poppedIngredient = ingredients.pop();
  console.log('poppedIngredient', poppedIngredient);
  console.log('ingredients', ingredients);
}

// you can find further array functions in the documentation, here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// An array containing numbers
const numberArray = [0, 1, 2, 3];

// An array containing different data types
const mixedArray = [1, 'chicken', false];














// The following codes will need descriptions, not part of this lesson, but will be new lessons

// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------














// LOOPS -----------------------------------------------------------------------

/* 
  while (condition) {
    // code block to be executed
  }
  
  let i = 0;
  
  while (i < 5) {        
    console.log(i);
    i++;
  }
 */


/* 
  const items = ['apricot', 'banana', 'cherry'];
  
  for (let i = items.length - 1; i >= 0; i -= 1) {
    console.log(`${i}. ${items[i]}`);
  }
  
  // Prints: 2. cherry
  // Prints: 1. banana
  // Prints: 0. apricot
 */


/* 
  x = 0
  i = 0
  
  do {
    x = x + i;
    console.log(x)
    i++;
  } while (i < 5);
  
  // Prints: 0 1 3 6 10
 */


/* 
  for (let i = 0; i < 4; i += 1) {
    console.log(i);
  };
  
  // Output: 0, 1, 2, 3
 */


/* 
  for (let i = 0; i < array.length; i++){
    console.log(array[i]);
  }
  
  // Output: Every item in the array
 */


/* 
  for (let i = 0; i < 99; i += 1) {
    if (i > 5) {
      break;
    }
    console.log(i)
  }
  
  // Output: 0 1 2 3 4 5
 */

/* 
  for (let outer = 0; outer < 2; outer += 1) {
    for (let inner = 0; inner < 3; inner += 1) {
      console.log(`${outer}-${inner}`);
    }
  }
 */














// ITERATORS -----------------------------------------------------------------------

/* 
  let plusFive = (number) => {
    return number + 5;  
  };
  // f is assigned the value of plusFive
  let f = plusFive;
  
  plusFive(3); // 8
  // Since f has a function value, it can be invoked. 
  f(9); // 14
 */


/* 
  const isEven = (n) => {
    return n % 2 == 0;
  }
  
  let printMsg = (evenFunc, num) => {
    const isNumEven = evenFunc(num);
    console.log(`The number ${num} is an even number: ${isNumEven}.`)
  }
  
  // Pass in isEven as the callback function
  printMsg(isEven, 4); 
  // Prints: The number 4 is an even number: True.
 */


/* 
  const arrayOfNumbers = [1, 2, 3, 4];
  
  const sum = arrayOfNumbers.reduce((accumulator, currentValue) => {  
    return accumulator + currentValue;
  });
  
  console.log(sum); // 10
 */


/* 
  const numbers = [28, 77, 45, 99, 27];
  
  numbers.forEach(number => {  
    console.log(number);
  }); 
 */

/* 
  const randomNumbers = [4, 11, 42, 14, 39];
  const filteredArray = randomNumbers.filter(n => {  
    return n > 5;
  });
 */

/* 
  const finalParticipants = ['Taylor', 'Donald', 'Don', 'Natasha', 'Bobby'];
  
  const announcements = finalParticipants.map(member => {
    return member + ' joined the contest.';
  })
  
  console.log(announcements);
 */












// OBJECTS -----------------------------------------------------------------------

/* 
  const apple = { 
    color: 'Green',
    price: {
      bulk: '$3/kg',
      smallQty: '$4/kg'
    }
  };
  console.log(apple.color); // 'Green'
  console.log(apple.price.bulk); // '$3/kg'
 */

/* 
  // Example of invalid key names
  const trainSchedule = {
    platform num: 10, // Invalid because of the space between words.
    40 - 10 + 2: 30, // Expressions cannot be keys.
    +compartment: 'C' // The use of a + sign is invalid unless it is enclosed in quotations.
  }
 */

/* 
  const classElection = {
    date: 'January 12'
  };
  
  console.log(classElection.place); // undefined
 */

/* 
  const student = {
    name: 'Sheldon',
    score: 100,
    grade: 'A',
  }
  
  console.log(student)
  // { name: 'Sheldon', score: 100, grade: 'A' }
  
  delete student.score
  student.grade = 'F'
  console.log(student)
  // { name: 'Sheldon', grade: 'F' }
  
  student = {}
  // TypeError: Assignment to constant variable.
 */

/* 
  let mobile = {
    brand: 'Samsung',
    model: 'Galaxy Note 9'
  };
  
  for (let key in mobile) {
    console.log(`${key}: ${mobile[key]}`);
  }
 */

/* 
  const classOf2018 = {
    students: 38,
    year: 2018
  }
 */

/* 
  const person = {
    firstName: "Matilda",
    age: 27,
    hobby: "knitting",
    goal: "learning JavaScript"
  };
  
  delete person.hobby; // or delete person[hobby];
  
  console.log(person); 
 */

/* 
  const origNum = 8;
  const origObj = {color: 'blue'};
  
  const changeItUp = (num, obj) => {
    num = 7;
    obj.color = 'red';
  };
  
  changeItUp(origNum, origObj);
  
  // Will output 8 since integers are passed by value.
  console.log(origNum);
  
  // Will output 'red' since objects are passed 
  // by reference and are therefore mutable.
  console.log(origObj.color);
 */

/* 
  const engine = {
    // method shorthand, with one argument
    start(adverb) {
      console.log(`The engine starts up ${adverb}...`);
    },  
    // anonymous arrow function expression with no arguments
    sputter: () => {
      console.log('The engine sputters...');
    },
  };
  
  engine.start('noisily');
  engine.sputter();
 */

/* 
  const rubiksCubeFacts = {
    possiblePermutations: '43,252,003,274,489,856,000',
    invented: '1974',
    largestCube: '17x17x17'
  };
  const {possiblePermutations, invented, largestCube} = rubiksCubeFacts;
  console.log(possiblePermutations); // '43,252,003,274,489,856,000'
  console.log(invented); // '1974'
  console.log(largestCube); // '17x17x17'
 */

/* 
  const activity = 'Surfing';
  const beach = { activity };
  console.log(beach); // { activity: 'Surfing' }
 */

/* 
  const cat = {
    name: 'Pipey',
    age: 8,
    whatName() {
      return this.name  
    }
  };
  
  console.log(cat.whatName()); 
  // Output: Pipey
 */

/* 
  const restaurant = {
    numCustomers: 45,
    seatCapacity: 100,
    availableSeats() {
      // this refers to the restaurant object
      // and it's used to access its properties
      return this.seatCapacity - this.numCustomers;
    }
  }
 */

/* 
  const myObj = {
    data: 'abc',
    loggerA: () => { console.log(this.data); },
    loggerB() { console.log(this.data); },
  };

  myObj.loggerA();    // undefined
  myObj.loggerB();    // 'abc'
 */

/* 
  const myCat = {
    _name: 'Snickers',
    get name(){
      return this._name
    },
    set name(newName){
      //Verify that newName is a non-empty string before setting as name property
      if (typeof newName === 'string' && newName.length > 0){
        this._name = newName; 
      } else {
        console.log("ERROR: name must be a non-empty string"); 
      }
    }
  }
 */

/* 
  // A factory function that accepts 'name', 
  // 'age', and 'breed' parameters to return 
  // a customized dog object. 
  const dogFactory = (name, age, breed) => {
    return {
      name: name,
      age: age,
      breed: breed,
      bark() {
        console.log('Woof!');  
      }
    };
  };
 */

/* 
  const myCat = {
    _name: 'Dottie',
    get name() {
      return this._name;  
    },
    set name(newName) {
      this._name = newName;  
    }
  };
  
  // Reference invokes the getter
  console.log(myCat.name);
  
  // Assignment invokes the setter
  myCat.name = 'Yankee';
 */











 // CLASSES -----------------------------------------------------------------------

/* 
  class Dog {
    constructor(name) {
      this._name = name;  
    }
    
    introduce() { 
      console.log('This is ' + this._name + ' !');  
    }
    
    // A static method
    static bark() {
      console.log('Woof!');  
    }
  }
 
  const myDog = new Dog('Buster');
  myDog.introduce();
  
  // Calling the static method
  Dog.bark();
 */

/* 
  class Song {
    constructor() {
      this.title;
      this.author;
    }
    
    play() {
      console.log('Song playing!');
    }
  }
  
  const mySong = new Song();
  mySong.play();
 */

 /* 
  class Song {
    constructor(title, artist) {
      this.title = title;
      this.artist = artist;
    }
  }
  
  const mySong = new Song('Bohemian Rhapsody', 'Queen');
  console.log(mySong.title);
 */

/* 
  class Song {
    play() {
      console.log('Playing!');
    }
    
    stop() {
      console.log('Stopping!');
    }
  }
 */

/* 
  // Parent class
  class Media {
    constructor(info) {
      this.publishDate = info.publishDate;
      this.name = info.name;
    }
  }
  
  // Child class
  class Song extends Media {
    constructor(songData) {
      super(songData);
      this.artist = songData.artist;
    }
  }
  
  const mySong = new Song({ 
    artist: 'Queen', 
    name: 'Bohemian Rhapsody', 
    publishDate: 1975
  });
 */










// MODULES -----------------------------------------------------------------------

/* 
  var moduleA = require( "./module-a.js" );
  
  // The .js extension is optional
  var moduleA = require( "./module-a" );
  // Both ways will produce the same result.
  
  // Now the functionality of moduleA can be used
  console.log(moduleA.someFunctionality)
 */

/* 
  // module "moduleA.js"
  export default function cube(x) {
    return x * x * x;
  }
  
  // In main.js
  import cube from './moduleA.js';
  // Now the `cube` function can be used straightforwardly.
  console.log(cube(3)); // 27
 */

/* 
  let Course = {};
  Course.name = "Javascript Node.js"
  module.exports = Course;
 */

/* 
  // add.js
  export const add = (x, y) => {
    return x + y
  }


  // main.js
  import { add } from './add';
  console.log(add(2, 3)); // 5
 */









// PROMISES -----------------------------------------------------------------------

/* 
  const promise = new Promise((resolve, reject) => {
    const res = true;
    // An asynchronous operation.
    if (res) {
      resolve('Resolved!');
    }
    else {
      reject(Error('Error'));
    }
  });
  
  promise.then((res) => console.log(res), (err) => alert(err));
 */

/* 
  const executorFn = (resolve, reject) => {
    resolve('Resolved!');
  };
  
  const promise = new Promise(executorFn);
 */

 /* 
  const promise = new Promise((resolve, reject) => {    
    setTimeout(() => {
      resolve('Result');
    }, 200);
  });
  
  promise.then((res) => {
    console.log(res);
  }, (err) => {
    alert(err);
  });
 */

/* 
  const promise = new Promise((resolve, reject) => {  
    setTimeout(() => {
      reject(Error('Promise Rejected Unconditionally.'));
    }, 1000);
  });
  
  promise.then((res) => {
    console.log(value);
  });
  
  promise.catch((err) => {
    alert(err);
  });
 */

/* 
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(3);
    }, 300);
  });
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, 200);
  });
  
  Promise.all([promise1, promise2]).then((res) => {
    console.log(res[0]);
    console.log(res[1]);
  });
 */

/* 
  const promise = new Promise((resolve, reject) => {  
    setTimeout(() => {
      resolve('*');
    }, 1000);
  });
  
  const twoStars = (star) => {  
    return (star + star);
  };
  
  const oneDot = (star) => {  
    return (star + '.');
  };
  
  const print = (val) => {
    console.log(val);
  };
  
  // Chaining them all together
  promise.then(twoStars).then(oneDot).then(print);
 */

/* 
  const loginAlert = () =>{
    alert('Login');
  };
  
  setTimeout(loginAlert, 6000);
 */

/* 
  const executorFn = (resolve, reject) => {
    console.log('The executor function of the promise!');
  };
  
  const promise = new Promise(executorFn);
 */

/* 
  const promise = new Promise(resolve => setTimeout(() => resolve('dAlan'), 100));
  
  promise.then(res => {
    return res === 'Alan' ? Promise.resolve('Hey Alan!') : Promise.reject('Who are you?')
  }).then((res) => {
    console.log(res)
  }, (err) => {
    alert(err)
  });
 */











// ASYNC-AWAIT -----------------------------------------------------------------------

/* 
  function helloWorld() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Hello World!');
      }, 2000);
    });
  }
  
  const msg = async function() { //Async Function Expression
    const msg = await helloWorld();
    console.log('Message:', msg);
  }
  
  const msg1 = async () => { //Async Arrow Function
    const msg = await helloWorld();
    console.log('Message:', msg);
  }
  
  msg(); // Message: Hello World! <-- after 2 seconds
  msg1(); // Message: Hello World! <-- after 2 seconds
 */

 /* 
  let promise1 = Promise.resolve(5);
  let promise2 = 44;
  let promise3 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, 'foo');
  });
  
  Promise.all([promise1, promise2, promise3]).then(function(values) {
    console.log(values);
  });
  // expected output: Array [5, 44, "foo"]
 */

/* 
  function helloWorld() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Hello World!');
      }, 2000);
    });
  }
  
  async function msg() {
    const msg = await helloWorld();
    console.log('Message:', msg);
  }
  
  msg(); // Message: Hello World! <-- after 2 seconds
 */

/* 
  let json = '{ "age": 30 }'; // incomplete data
  
  try {
    let user = JSON.parse(json); // <-- no errors
    alert( user.name ); // no name!
  } catch (e) {
    alert( "Invalid JSON data!" );
  }
 */

/* 
  function helloWorld() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Hello World!');
      }, 2000);
    });
  }
  
  async function msg() {
    const msg = await helloWorld();
    console.log('Message:', msg);
  }
  
  msg(); // Message: Hello World! <-- after 2 seconds
 */










// REQUESTS -----------------------------------------------------------------------

/* 
  const jsonObj = {
    "name": "Rick",
    "id": "11A",
    "level": 4  
  };
 */

/* 
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'mysite.com/api/getjson');
 */

/* 
  const requestUrl = 'http://mysite.com/api/vendor?name=kavin&id=35412';
 */

/* 
  const req = new XMLHttpRequest();
  req.responseType = 'json';
  req.open('GET', '/myendpoint/getdata?id=65');
  req.onload = () => {
    console.log(xhr.response);
  };
  
  req.send();
 */

/* 
  const data = {
    fish: 'Salmon',
    weight: '1.5 KG',
    units: 5
  };
  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/inventory/add');
  xhr.responseType = 'json';
  xhr.send(JSON.stringify(data));
  
  xhr.onload = () => {
    console.log(xhr.response);
  };
 */

/* 
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'apikey': apiKey
    },
    body: data
  }).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed!');
  }, networkError => {
    console.log(networkError.message)
  })
  }
 */

/* 
  fetch('url-that-returns-JSON')
  .then(response => response.json())
  .then(jsonResponse => {
    console.log(jsonResponse);
  });
 */

/* 
  fetch('url')
  .then(
    response  => {
      console.log(response);
    },
  rejection => {
      console.error(rejection.message);
  );
 */

/* 
  fetch('https://api-to-call.com/endpoint', {
    method: 'POST',
  body: JSON.stringify({id: "200"})
  }).then(response => {
    if(response.ok){
        return response.json();  
    }
      throw new Error('Request failed!');
  }, networkError => {
    console.log(networkError.message);
  }).then(jsonResponse => {
    console.log(jsonResponse);
  })
 */

/* 
  const getSuggestions = async () => {
    const wordQuery = inputField.value;
    const endpoint = `${url}${queryParams}${wordQuery}`;
    try{
  const response = __~await~__ __~fetch(endpoint, {cache: 'no-cache'});
      if(response.ok){
        const jsonResponse = await response.json()
      }
    }
    catch(error){
      console.log(error)
    }
  }
 */









 // SOURCE -----------------------------------------------------------------------
 // https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-introduction/cheatsheet
 // END -----------------------------------------------------------------------
 // tests, certifications

 /* 
  
  VARIABLES
  CONDITIONALS
  FUNCTIONS
  SCOPE
  ARRAYS
  LOOPS
  ITERATORS
  OBJECTS
  CLASSES
  MODULES
  PROMISES
  ASYNC-AWAIT
  REQUESTS

 */