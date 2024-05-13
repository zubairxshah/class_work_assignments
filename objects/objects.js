/* Class 9, Thursday Time 9-12 Date 02-May-2024 */
// let student = {
//     username : 'Shah123',
//     lastName : 'Shah',
//     slot : 'Thursday',
//     teacher : 'Miss Manaheel',
// }
// console.log(`My name is ${student.username}`)
let student = {
    username: 'Shah',
    age: 24,
    gender: 'male',
    email: 'xyz@abc.com',
    dob: 12122000
};
console.log(`My name is ${student.username}`);
let vehicle = {
    carName: 'Baleno',
    brand: 'Suzuki',
    make: 2024,
    color: 'Metalic white',
    transmission: 'A/T'
};
let student2 = {
    username: 'Shah',
    age: 24,
    gender: 'male',
    email: 'xyz@abc.com',
    //dob : 12122000 // object can't accept any other value except declared
};
let employee = {
    name: '558788', // gives error if type is defined as string and value is given as number
    email: 'shah@xyz.com',
    age: 24
};
let shopList = {
    biscuit: 'Tuc',
    toothpaste: 'Colgate',
    budget: 1500,
};
let employee2 = {
    name: 'Shah',
    age: 24,
    isAdmin: true
};
// in above type, there is another type nested into it.
let civic = {
    carName: 'Civic',
    modelNo: 2020,
    //isReady: false, // adding ? to a property makes it optional in the object and it won't generate an error
    color: undefined,
    power: 1000
};
let honda = {
    carName: 'Civic',
    modelNo: 2020,
    isReady: false,
    color: undefined,
    power: '1000'
};
honda.carName = 'City';
honda.isReady = true;
console.log(honda);
let userName = 'Shah';
let userName2 = 'Teacher';
let items = 5000;
items = 'Jelly';
export {};
