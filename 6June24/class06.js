// Topic Synchronous and Asynchronous Programming

// console.log('Hello World!');
// console.log('Hi, Shah..');
// Compiler reads code line by line and executes accordingly.
//Nose JS is a runtime environment for JavaScript, which is an engine to run JS
// codes in different terminals rather than any browser environment.
// for (let i = 0; i <= 10; i++) {
//     console.log('Loop Calling', i);
// }
// console.log('This is Shah.');

// above code runs line by line, once at loop, the engine will execute the cide i times and 
// then moves to next available line of code.

// xyz // error
// Upon any error, engine throws an error and stops executing subsequent lines.

// const userName = 'Shah';
// console.log(userName);
// greetings(userName); // it will throw an error as the function is defined after calling it
// const greetings = (name) => {
//     console.log (`Hello ${name}`)
// }

// for (let i = 0; i <= 10; i++) {
//     console.log('i: ', i);
// }

// console.log('123455');

// greetings(userName);

// Callback function

// const hello = (name) => {
//     console.log(name)
// }

// hello('Hello World!');
// hello(123);
// hello(true);
// hello(111, 234);
// hello('Hello World!');
// hello({key:'Shah'});

// A function can receive another function as a parameter, wich is also called callback function.

// const rndFunc = () => {
//     console.log('Hello World!')
// }

// const callback = (callback) => {
//     callback()
// };

// callback(rndFunc);

const sumTwoNums = () => {
    return 2+3;
}

const productof2Nums = () => {
    return 2*3;
}

const anotherFunc = (param) => {
    console.log(param());
}

anotherFunc(sumTwoNums);

const oneMoreFunc = (param1, para2) => {
    console.log(param1(), para2());
}

oneMoreFunc(sumTwoNums, productof2Nums);