/* Topic: Arrays */
const students = ['Hamza Alvi', 'Ameen Alam', 'Fawwad Khan']; //array stores multiple data
console.log(students);
const numbers = [1, 2, 3, 4, 5, 6];
const booArray = [true, false, false];
const mixedArray = ['Shah', 12345, true, null, undefined]; //adding multipe data types is allowed
console.log(numbers, booArray, mixedArray);
let newNumbers = [1, 2, 3, 4, 5, 6];
let arrayU = ['Shah', 5, 'world', 4, true]; // type annoting an array fixes the data type insertion
let newArray = ['Maria', 'Shah', 'Alvi'];
console.log(newArray[0]); // Accessing specific data using index numbers
let teachers = ['Maria', 'Hamza', 'Ameen'];
console.log(teachers, 'teachers before');
teachers[0] = 'Aziz';
console.log(teachers, 'teachersafter ');
// replacing an existing value with a new value by index number
let names = ['Jack', 'Paul', 'John', 'Clive', 'Mark'];
names[2] = 'Norton';
console.log(names);
// Array methods push(value), pop(), unshift(value), shift()
names.push('Windy'); // add a new value at the end of array
console.log(names);
names.pop(); // removes last element from an array
names.pop();
console.log(names);
names.unshift('Linda', 'Jane'); // adds a new element at the beginning of an array
console.log(names);
names.shift();
console.log(names);
let changeArray = () => { };
export {};
