/* Assignment 1: Building Your Friend List
Learning Objective: Practice working with objects and arrays in TypeScript to create a data
structure. Task: Create a program that manages a simple friend list.
1. Define an object named people containing an empty array called friends.
2. Create three separate objects, each representing a friend, with properties like firstName,
lastName, and optionally id.
3. Add these friend objects to the friends array within the people object.
4. Output the entire people object to the console, displaying your information and your
friend list. */

type Friend =
    {
        firstName : string;
        lastName : string;
        id : number
    }

let people = {friends: []}

let obj1 : Friend = {
    firstName : 'Zubair',
    lastName : 'Shah',
    id : 1010
};

let obj2 : Friend = {
    firstName : 'Asad',
    lastName : 'Ali',
    id : 1011
};

let obj3 : Friend = {
    firstName : 'Mariah',
    lastName : 'Watts',
    id : 1012
};

people.friends.unshift(obj1, obj2, obj3);
for (let persons of people.friends) {
    console.log(persons);
};


// Created by M. Zubair Shah