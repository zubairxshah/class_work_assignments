import inquirer from "inquirer";

/* 1. Miles-to-Kilometers Converter (Operators): 
• Create a variable named miles and assign a numeric value representing distance in miles. 
• Calculate the equivalent distance in kilometers using the conversion factor (1 mile = 
1.60934 kilometers). You can achieve this by multiplying miles by 1.60934. 
• Store the converted distance in kilometers in a variable named kilometers. 
• Use console.log to print a message in the following format:  
The distance of 130 kms is equal to 209.2142 miles */

let miles : number = 130;
let kilometers : number = miles * 1.60934;

console.log(`The distance of ${kilometers} kms is equal to ${miles} miles.\n`);

/* 2.Evaluating a number game: 
• Prompt the user to enter a number. 
• Compare the entered number with a dynamic number value. 
• Output the result indicating whether the entered number is greater than, equal to, or less 
than the dynamic number value. */

let dynamicNumber :number = 100;
function genDynNum (x:number) : number {
    let randomNum = Math.floor(Math.random()*x)+1;
    return randomNum % 2 === 0 ? randomNum : genDynNum(x);
}


const userInput = await inquirer.prompt ([
    {
    message : 'Enter a valid number between 0 - 100 to start the game',
    name : 'nums',
    type : 'number',
    }
])

let dynamicValue : number = genDynNum(dynamicNumber);
    if (userInput.nums === dynamicValue) {
        console.log(`Your input ${userInput.nums} is equal to ${dynamicValue}.\n`);
    }
    if (userInput.nums < dynamicValue) {
        console.log(`Your input ${userInput.nums} is less than ${dynamicValue}.\n`);
    }
    if (userInput.nums > dynamicValue) {
       console.log(`Your input ${userInput.nums} is greater than ${dynamicValue}.\n`);
    }
    if (isNaN(userInput.nums)){
        console.log(`Please, enter a valid number between 2 to 100.\n`);
        }

/* 3.Friend checker game: 
• Prompt the user to enter a name. 
• Use a switch statement to check if the entered name is a known friend. 
• Output a confirmation message if the name is known, otherwise output a default 
response. */

const friendName = await inquirer.prompt ([
    {
    message : 'Enter your friends name:',
    name : 'name',
    type : 'string',
    }
]);

let friends : string [] = ['zakir', 'ali', 'sarah', 'asad'];

switch(friendName.name) {
    case friends[0]:
            console.log('You know this person and is your friend.\n');
    break;
    case friends[1]:
            console.log('You know this person and is your friend.\n');
    break;
    case friends[2]:
            console.log('You know this person and is your friend.\n');
    break;
    case friends[3]:
            console.log('You know this person and is your friend.\n');
    break;

    default :
            console.log (`${friendName.name} is not a known person.\n`);
    break;
}
;

/* 4.Functions: 
• Set up two different variables with different values. 
• Call a function with these variables as arguments and output the result using console.log. 
• Create a second call to the function with two more numbers as arguments. */

let a = 7;
let b = 5;
function sum (a:number,b:number) {
    return a + b;
}

console.log(sum(a,b));
console.log(sum(5,10));

/* 4.Calculator project using function: 
• Set up two variables containing number values. 
• Set up a variable to hold an operator (+ or -). 
• Create a function that takes two numbers and an operator as parameters, performs the 
corresponding operation, and returns the result. 
• Call the function with the variables and operator, and output the result using console.log. 
• Update the operator value and call the function again with the updated arguments. */

let x =10;
let y = 8;
let z = ''
function calculator (x:number,z:string,y:number) {
    if (z === '+') return x + y;
    if (z === '-') return x - y;
    else console.log ('Enter a valid number and choose either "+" or "-".');
}

console.log(calculator(x,'-',y) + ' Subtraction Answer');
console.log(calculator(5,'+',10) + ' Addition Answer\n');

/* 5.Anonymous functions: 
• Assign a function expression to a variable, with one parameter that outputs the provided 
argument to the console. 
• Pass an argument into the function. 
• Create the same function as a normal function declaration. */

let anymounsFunc = function(str:string) {
        console.log (str);
};

let str = 'Hello World!'
anymounsFunc(str);

function normalFunc (str:string) {
    console.log(str)
}

str = 'How are you?\n'
normalFunc(str);