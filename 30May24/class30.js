// Class 30 May 2024 - Topic : Loops
// for loop syntax (initializer; stopper; loop repeated) {statement}
// for (let count = 1; count <= 10; count++) {
// console.log('Hello World!');
// };
// for (let count = 0; count < 10; count++) {
//     console.log('Hello World!', count++);
//     };
// write a function
// which takes parameter type number
// and in function block write a for loop
// which prints the number table 
// const printTable = (num: number) => {
//     for (let i = 1; i<=10; i++) {
//         console.log(`${num} x ${i} = ${num*i}`)
//     }
// }
// printTable(2);
// const sumofN = (num : number) => {
//     let sum = 0;
//     for (let j=1; j<=num; j++) { // repeating arithmatic operations in a loop
//         sum = sum + j;
//     }
//     console.log(sum); // this will print the final value of sum
// }
// sumofN(5);
// while loop
// let i = 0;
// while (i <= 10) {
//     console.log (i, 'i');
//     i++;
// }
// // number table using while loop
// let multiplier = 1;
// let tableNum = 2;
// while (multiplier <= 10) {
//     console.log (`${tableNum} x ${multiplier} = ${tableNum*multiplier}`)
//     multiplier++;
// }
// for in loop, mostly usable to access data of an object
let obj = {
    name: 'Shah',
    batch: 'Thursday',
    isAvailable: true
};
//console.log (obj['name']); console.log (obj['batch']);
for (let property in obj) {
    console.log(property);
}
for (let property in obj) {
    console.log(property, obj[property]);
}
let firstName = ["Asim", "Ayaan", "Osama", "Ali", "Kashif"];
let lastName = ["Khan", "Shaikh", "Abbassi", "Ahmed"];
let fullName = [];
for (let i = 0; i < firstName.length; i++) {
    if (lastName[i] !== undefined) {
        fullName.push(`${firstName[i]} ${lastName[i]}`);
    }
    else {
        fullName.push(firstName[i]); // Add only the first name if last name is undefined
    }
}
console.log(fullName);
export {};
