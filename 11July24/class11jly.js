// Revision of previous topics by sir Hamza Alvi, Date: 11-July-2024
// Union typing
let dob = 1920;
let a; // good way to assign types on single variable
console.log(a); // prints undefined, since variable has no value.
let id = 'data';
let studentObj = {
    name: 'Shah',
    isStudent: true,
    email: 'abd@email.com',
    password: 'abc123',
    address: 'Karachi'
};
// functions: normal, arrow, and anonymous functions
//function() {
function sayHello() {
    return 'Shah'; // if function does not return anything the result will be "undefined'
}
console.log(sayHello());
const sayhello = () => {
    return undefined; // type of an undefined return is void
};
// rest parameter/operator "..."
let restParam = (a, b, ...rest) => {
    console.log(a);
    console.log(b);
    console.log(rest);
    console.log(rest[4]); // output undefined, will print outut if rest parameter has 5 elements 
};
restParam('Shah', 'Syed', 'Joe', 'Hans');
// enum keyword
var UserStatus;
(function (UserStatus) {
    UserStatus[UserStatus["LOGIN"] = 1] = "LOGIN";
    UserStatus[UserStatus["LOUGOUT"] = 0] = "LOUGOUT";
    UserStatus[UserStatus["IDLE"] = 1] = "IDLE";
})(UserStatus || (UserStatus = {}));
console.log(UserStatus.LOGIN); // enum is a readonly object and outside of its block
// enum properties cannot be changed or replaced
var Shopdata;
(function (Shopdata) {
    Shopdata[Shopdata["RACK1"] = 0] = "RACK1";
    Shopdata[Shopdata["RACK2"] = 1] = "RACK2";
    Shopdata[Shopdata["RACK3"] = 2] = "RACK3";
    Shopdata[Shopdata["RACK4"] = 3] = "RACK4"; // assigns 3 value
})(Shopdata || (Shopdata = {}));
console.log(Shopdata); //enum assign value by itself if properties have no value
export {};
