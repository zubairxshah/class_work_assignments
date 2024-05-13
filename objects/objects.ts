/* Class 9, Thursday Time 9-12 Date 02-May-2024 */

// let student = {
//     username : 'Shah123',
//     lastName : 'Shah',
//     slot : 'Thursday',
//     teacher : 'Miss Manaheel',
// }
// console.log(`My name is ${student.username}`)

let student = {
    username : 'Shah',
    age : 24,
    gender : 'male',
    email : 'xyz@abc.com',
    dob : 12122000
}
console.log(`My name is ${student.username}`)

let vehicle = {
    carName : 'Baleno',
    brand : 'Suzuki',
    make : 2024,
    color : 'Metalic white',
    transmission : 'A/T'
}

let student2 :{
    username : string,
    age : number,
    gender : string,
    email: string,
}= {
    username : 'Shah',
    age : 24,
    gender : 'male',
    email : 'xyz@abc.com',
    //dob : 12122000 // object can't accept any other value except declared
};

let employee : {name: string, email:string, age: number} = {
    name : '558788', // gives error if type is defined as string and value is given as number
    email : 'shah@xyz.com',
    age : 24
};

let shopList : {biscuit: string, toothpaste:string, budget: number} = {
    biscuit: 'Tuc',
    toothpaste: 'Colgate',
    budget: 1500,
};

type Employee = {
    name: string,
    age: number,
    isAdmin: boolean,
};

let employee2 :Employee ={
    name : 'Shah',
    age : 24,
    isAdmin : true
}
type HorsePower = number | string // variable can be assigned multiple types
type Vehicle = {carName: string, modelNo: number, isReady?: boolean, color : undefined, power:HorsePower};
// in above type, there is another type nested into it.
let civic : Vehicle= {
carName: 'Civic',
modelNo: 2020,
//isReady: false, // adding ? to a property makes it optional in the object and it won't generate an error
color: undefined,
power: 1000
}
let honda : Vehicle= {
    carName: 'Civic',
    modelNo: 2020,
    isReady: false,
    color: undefined,
    power: '1000'
    }

honda.carName = 'City';
honda.isReady = true
console.log (honda);

//////////////////////////////////////////////////

// declaring a variable value inside a type
// following example makes a default type and value to the variable
type UserName = 'Shah'
let userName : UserName = 'Shah'

type Faculty = 'Student' | 'Admin' | 'Teacher' | 'TA'
let userName2 : Faculty = 'Teacher'

type Items = 'Biscuits' | 'Toffee' |'Jelly' | 5000;
let items : Items = 5000
items = 'Jelly'