// Topics:   by Sir Hamza Alvi Date 27-June-2024
//Ternary Operators ? and : An shorthand alternate to if..else conditionals
let userName = 'Shah';
// when condition meets
userName === 'Shah' ? console.log(`Hello ${userName}!`) : console.log('User not found!');
// when condition does not match
userName === 'Babar' ? console.log(`Hello ${userName}!`) : console.log('User not found!');
// console.log(2 == "2", "Condition Check") // True output
// console.log(2 === "2", "Condition Check") // false output
// Modules in TypeSript and JS : import and export keywords
import { printNames } from "./app.js"; // Here the code imports a function from another file called app.js
printNames("Shah", "Saeed"); // using imported function in main file
console.log();
import { addition, subtraction, multiply } from "./module2/arithmetic.js";
addition(1, 2, 3);
subtraction(4, 2);
multiply(3, 4);
//switch, case, break, and default keywords and their uses
const dayOfWeek = 'Thursday';
switch (dayOfWeek) {
    case 'Monday':
        console.log('Your day is Tuesday.');
        break;
    case 'Wednesday':
        console.log('Your day is Wednesday.');
        break;
    case 'Thursday':
        console.log('Your day is Wednesday.');
        break;
    default:
        ('Not a valid day.');
}
let obtainedMarks = 65;
switch (true) {
    case obtainedMarks >= 80:
        console.log('Congratulation! You secured A+ Grade.');
        break;
    case obtainedMarks >= 70 && obtainedMarks < 80:
        console.log('Congratulation! You secured A Grade.');
    case obtainedMarks >= 60 && obtainedMarks < 70:
        console.log('Congratulation! You secured B Grade.');
        break;
    case obtainedMarks >= 50 && obtainedMarks < 60:
        console.log('Congratulation! You secured C Grade.');
        break;
    case obtainedMarks < 50:
        console.log('Sorry! you secured D grade.');
        break;
    default:
        console.log('Not a valid score.');
}
// let a = ["A", "B", "C", "D"]
// for (let x of a){
//     if (x === "B")
//         {a.splice(1,3)}
//     else{
//         console.log(x)
//     }
// }
