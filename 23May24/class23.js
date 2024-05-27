/* Topic Array Methods GIAIC
May 23, 2024 */
// Splice and slice
const names = ['Shah', 'Ali', 'Jawwad'];
names.splice(1, 1, 'Bilal', 'Ameen'); // start index, number of deletions, adding a new element at specified index
console.log(names, 'names');
names.splice(1, 1);
console.log(names, 'names');
const persons = ['Shah', 'Ali', 'Jawwad'];
persons.slice(0, 2); // shows 
console.log(persons, 'names');
const fruits = ['Apples', 'Mango', 'Ornage']; // type restricted array, can't be more or less
// multi-Dimensional arrays
const multiArr = [1, 2, 4, 5, [1, 2, 3, 4]]; // array inside an array as nesting some arrays within an array as an element
console.log(multiArr); // output [ 1, 2, 4, 5, [ 1, 2, 3, 4 ] ] 
console.log(multiArr[4]); // output [ 1, 2, 3, 4 ]
const arrMulti = [1, 2, 3, 5, ['Mehran', 'Civic', 'Honda']];
console.log(arrMulti[4][0]);
const newArr = [1, 2, 3, 4, 5, ['Karachi', 'Lahore', 'Quetta']];
console.log(newArr[5][2]);
let intersect = {
    name: 'abc',
    class: 'Thursday',
    dob: 2012
};
// as operator for type casting
// defining types another way
let userName = 'Shah';
let num = 1;
let anyThing = 8;
export {};
