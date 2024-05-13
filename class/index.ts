let findPrimeNum = (number1:number) => {
    
//    if (number1%2 !== 0 && number1/number1 && number1/1) {
// if (number1 === 1 && 0){
//     return false;}
if (number1 === 2){
    return true;
}
if (number1 === 1){
    return false;
}        
if (number1 === 0){
    return false;
}
  for (let i=2; i<number1; i++){
    if (number1%i===0) {
      return false
    }
  }
  return true;
}
    
for (let val =0; val<=20; val++) {
    if (findPrimeNum(val) === true) {
        console.log(`${val} ${findPrimeNum(val)} is prime.`);
    }
    else {
        console.log (`${val} is not a prime numbers.`);
    }
}

function inArray (rest:string, ...anyThing:any) {
 console.log('This prints anyparameter to console\n', anyThing);   
 return rest
}

inArray('Any string', 'is', 'here', 20, 30, 'numbers','in','array')

let subtraction = (a:number,b:number) => a-b;
console.log(subtraction(5,8));

const stationary = {
    journals : 'Full Size',
    ballPen : 10,
    inkPen : 5,
    papers : 'A4 Size',
    bundles : 8
}

console.log(stationary.journals.length)
console.log(`Buy ${stationary.ballPen} pens and also buy ${stationary.bundles} of ${stationary.papers}.`)

	let checkNumber = (number:number) => {

		// Base conditions are given to stop the recursive function
		if(number === 0) return (number + " is even");
		if(number === 1) return (number + " is odd \n");
		return checkNumber(number - 2);
	}
	console.log(checkNumber(5));
	console.log(checkNumber(10));
	console.log(checkNumber(13333));

let recursion = (numr:number) => {
    if (numr === 20) return console.log(numr + " found.");
    if (numr < 20) return console.log(numr + " comes before 20.");
    recursion(numr + 1);
}

recursion(3);

function matchingLetter (str : string, letter:string, index = 0): number | null {
    if (index === str.length) return null;
    if (str[index] === letter) return index;

    return matchingLetter(str, letter, index+1);
}

const str = "Hello, vypeScript!";
const letterToFind = "T";
const position = matchingLetter(str, letterToFind);

if (position !== null) {
  console.log(`Letter '${letterToFind}' found at position: ${position}`);
} else {
  console.log(`Letter '${letterToFind}' not found in the string.`);
}

function indexingLetters (message:string, index:number) {
    if (index === 0) {console.log('letter is ', message[0])
      return;}

    indexingLetters(message.substring(1), index - 1);
}

let message = 'Hello World!'
for (let val=0; val<message.length; val++){
indexingLetters(message, val);}

let prints = 'Students'
for (let val=0; val<prints.length; val++){
console.log(prints[val]);}

function IncrementNums (nums : number) { // define a function identifier and add a parameter nums 
if (nums === 50) return; // Base Condition: if nums reaches 50 stop the code
console.log('function loops with an icrement of 5. ', nums); // print nums with increment value each time until code stops
IncrementNums(nums+5) // add +5 as an increment to nums, it will loop until base condition triggers
}
IncrementNums(10); // call the function with a value to nums parameter

type Obj = [any][any];
// (A) NESTED ARRAY
var nested :Obj= [
  ["first", "second"],
  ["third", "forth"]
];

// Loop through the nested array
function looper(entry:Obj) {
  for (let el of entry) {
      if (Array.isArray(el)) {
          looper(el); // Recurse if the element is an array
      } else {
          console.log(el); // Print the element
      }
  }
}

looper(nested);

function create2DArray<T>(rows: number, columns: number, initialValue: T): T[][] {
  return new Array(rows).fill(undefined).map(() => new Array(columns).fill(initialValue));
}
let stringArray = create2DArray<string>(3, 3, 'empty');
console.log(stringArray);

const colors = ["red", "yellow", "blue"];
colors[5] = "purple";
colors.forEach((item, index) => {
  console.log(`${index}: ${item}`);
});
// Output:
// 0: red
// 1: yellow
// 2: blue
// 5: purple

colors.reverse(); // ['purple', empty × 2, 'blue', 'yellow', 'red']

console.log (colors);