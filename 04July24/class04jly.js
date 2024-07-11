// Class Revision from Sir Zia Repo by Sr Hamza Alvi - Date: 04-July-2024
let age = 20;
function agenum(age) {
    return age;
}
console.log(agenum(10));
console.log(age);
// Variable declaration and type : Primitive (string, number, boolean, undefined, null, bigInt, Symbol)
// non-primitive types :   
let userName = 'Shah';
let dob = 15;
let isNotTrue = false;
let noValue; // have an undefined value
let bigNumber = BigInt("50000000000000000000000000000000000000000000000000000000000000000000000");
console.log(bigNumber);
let obj = {
    class: 'Thursday',
    name: 'Hamza Alvi',
    class2: 'Wednesday',
    name2: 'Ameen Alam'
};
let obj3 = obj;
//obj3.heyThere = 'Shah'; // write code in js file directly to avoid error
let arr = [];
//JSON Objects keys and values are stored in inversted commas or quotes ""
//"script": {
//    "test" : "message"
//}
// strong typing
let num = 5; // explicitly defining a type means strong typing
// type inference
//type error
let age1 = 25;
// age1 = '25' this declaration will throw a type error
// accessability error
let usrNames = 'Shah';
if (true) {
    let anyNum = 10;
    console.log(usrNames);
}
// console.log(anyNum); // is inside an if block, will not access the value
// assignbility error
// let usrNames = 'Shah'
if (true) {
    let anyNum = 10;
    console.log(usrNames);
}
// Any and unknown types
// use unknown rather than any and the typescript will define the type later once the value is available
let user = 'Shah';
if (typeof user === 'string') {
    console.log(user);
}
else if (typeof user === 'number') {
    console.log(user.toFixed(2));
}
export {};
