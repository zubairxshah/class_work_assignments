// Revision of previous topics by sir Hamza Alvi, Date: 11-July-2024

// Union typing
let dob: string | number 
    | boolean | string[] = 1920;

let a : string | boolean; // good way to assign types on single variable
console.log(a); // prints undefined, since variable has no value.

// using type keyword to assign explicit types
type StringorNumber = string | number; // good way to assign type for multiple variables

let id : StringorNumber = 'data';

// intersecton typing
type Student = {
    name: string,
    isStudent: boolean,
    rollNo?: number //optional property, no error will occur if not declared in an object
};

type UserInfo = {
    email: string,
    password: string,
    address: string
}

let studentObj : Student & UserInfo = { // two types for an object to take propertes from both types also
    name: 'Shah',
    isStudent: true,
    email: 'abd@email.com',
    password: 'abc123',
    address: 'Karachi'    
}

// functions: normal, arrow, and anonymous functions
//function() {
function sayHello (){
    return 'Shah' // if function does not return anything the result will be "undefined'
}

console.log(sayHello())

const sayhello = ():void=> {
    return undefined // type of an undefined return is void
}

// rest parameter/operator "..."

let restParam = (a: string, b: string, ...rest)=>{
    console.log(a)
    console.log(b)
    console.log(rest)
    console.log(rest[4]) // output undefined, will print outut if rest parameter has 5 elements 
}

restParam('Shah', 'Syed', 'Joe', 'Hans')

// enum keyword
enum UserStatus {
    LOGIN = 1,
    LOUGOUT = 0,
    IDLE
}

console.log(UserStatus.LOGIN) // enum is a readonly object and outside of its block
// enum properties cannot be changed or replaced
enum Shopdata {
    RACK1, // assigns 0 value
    RACK2, // assigns 1 value
    RACK3, // assigns 2 value
    RACK4 // assigns 3 value
}
console.log(Shopdata); //enum assign value by itself if properties have no value
