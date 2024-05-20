/* 1. Counting numbers of vowels in a string by creating a function. */
import inquirer from "inquirer";
function countingVowels(getString) {
    let vowelcounter = 0;
    for (let str of getString) {
        if (str === 'a' || str === 'e' || str === 'i' || str === 'o' || str === 'u') {
            vowelcounter++;
        }
        ;
    }
    return vowelcounter;
}
console.log(countingVowels('what a joyous day'));
////////////////////////////////////////////////
const countVowels = (str) => {
    let countedVowels = 0;
    let array = ['a', 'e', 'i', 'o', 'u'];
    for (let vowels of str) {
        if (array.includes(vowels)) {
            countedVowels++;
        }
    }
    return countedVowels;
};
let textInput = 'Where in the world we live, we should live peacefully';
console.log(countVowels(textInput));
function vowelsCount(vowel) {
    const str = vowel.match(/['aeiouAEIOU']/gi);
    return str ? str.length : 0;
}
const string = ('All Items Are Old.');
const countedVowels = vowelsCount(string);
console.log(string);
console.log(`There are ${countedVowels} vowels in this sentence.\n`);
/* 2. Funtion should check if the number is prime and not recurring. */
console.log('Write any number to see whether it is a prime number or not.\n');
function isPrime(num) {
    if (num <= 1)
        return false; // check for numbers below 1
    if (num % 2 == 0 && num > 2)
        return false; // check for even numbers using remainder method
    const sroot = Math.sqrt(num); // getting square root of number
    for (let i = 3; i <= sroot; i += 2) { // starting a loop from 3 with an increment of 2 of squareroot times
        if (num % i === 0)
            return false; // if loop finds a 0 remainder result will be false
    }
    return true; // true if num is a prime number
}
const number = await inquirer.prompt([
    { name: 'num', type: 'input', message: 'Please, enter a positive number.' }
]);
if (isPrime(number.num) === true) { // truthy statement means a prime numbers
    console.log(`${number.num} is a prime number.`);
}
else { // in any other case i.e. falsy
    console.log(`${number.num} is not a prime number.`);
}
/* 3. Funtion should check if the first charcter is not repeating in sentence. */
console.log('This function check a string for first non-repeated character. \n');
function firstUniqueChar(str) {
    // Define the type for the character map
    str = str.toLocaleLowerCase();
    const CharMap = {};
    // Mapping the string into an object
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        CharMap[char] = (CharMap[char] || 0) + 1;
    }
    // Checking occurrence of unique character in the mapped index
    for (let i = 0; i < str.length; i++) {
        if (CharMap[str[i]] === 1) {
            return str[i];
        }
    }
    console.log("There is no unique character in this string.");
    // return
    return;
}
console.log(firstUniqueChar('What is your name, where do you live?\n'));
/* 4. Following function will return square of a number. */
console.log('Get square of any number.\n');
let numInput = 10;
function squareNum(numInput) {
    numInput *= numInput;
    return numInput;
}
console.log('Square of number ' + numInput + ' is ' + squareNum(numInput) + '\n');
/* 5. Use of different function methods to write a string to console. */
console.log('Using functions to print \'Hello World\' to screen\n');
function writeString() {
    return console.log('Hello World..\n');
}
writeString();
const printString = function () { let strn = "Hello world.. Again\n"; return strn; };
console.log(printString());
const postParameter = (post, end) => console.log(post + end + ' As parameters');
postParameter('Hello World', ' See you');
//Mapping and counting strings from an array..
const a = ["Karachi", "Lahore", "Quetta", "Hyderabad"];
const a3 = [...a].map(s => s.length);
console.log("Using Arrow Function ", a3); // [7, 6, 6, 9]
function average(...nums) {
    return (nums[0] + nums[1] + nums[2]) / nums.length;
}
console.log(average(5, 5, 5));
