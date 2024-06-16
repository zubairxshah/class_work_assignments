// Async programming - 13-June-2024 by Sir Ameen Alam
// Code runs in call stack
// Transpile from TS to JS and js files runs using interpreter
// Global Execution Contexts stores values and interacts with call stack
// let pubG = '';
// pubG = 'We want an AC environment.';
// console.log(pubG);
// function makePizza() {
//     return 'Your delicious pizza is being prepared.'
// }
// let order = makePizza()
// console.log(order)
// in above code GEC executes variables and functions first i.e. 'hoisting'
// once hoistin is completed, Call stack will execute output of the code
// let SirZiaPromise = new Promise((resolve, reject)=>{
//     resolve("Passed")
// }) // new is to make a copy of original Promise
// SirZiaPromise.then( (response) => {
//     console.log(response)
// })
// let sirZiaPromise = new Promise((resolve, reject)=>{
//     reject("Failed and got a slipper") 
// }) // new is to make a copy of original Promise
// sirZiaPromise.then( (response) => {
//     console.log(response)
// }).catch((error) => {
// console.log(error)
// });
// async function siriaPromiseStatus(){ // adding async makes a function asynchronous
//     let status = await sirZiaPromise // waits for the response from sirZiaPromise to execute first
//     console.log(status)
// }
// siriaPromiseStatus()
let sirZiaPromise = new Promise((resolve, reject) => {
    //reject("Failed and got a slipper")
    resolve("Passed, got a level up.");
});
async function sirZiaPromiseStatus() {
    try {
        let status = await sirZiaPromise; // waits for the response from sirZiaPromise to execute first
        console.log(status, "Try Block");
    }
    catch (error) {
        console.error("Catch block", error);
    }
    finally {
        console.log("Finally block");
    }
}
sirZiaPromiseStatus();
export {};
