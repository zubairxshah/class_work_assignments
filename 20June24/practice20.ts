//Question 1: Write a TypeScript function that uses async/await to wait for 2 seconds 
//and then returns a string "Hello World".

async function printWithDelay(message:string){
    console.log("Q1: Wait 2secs for the greeting..");
    return setTimeout(()=> console.log(message),2000)
}

await printWithDelay("\nQ1: Hello World!")

//Question 2: Create a TypeScript function that takes a callback function as an 
//argument and uses setTimeout to call the callback after 1 second.

console.log('\nQ2:1 second delay is expected!')
let delayedMessage = ()=> console.log('Q2: Delay is over, login now..')
setTimeout(delayedMessage,1000);

// Question 3: Write a TypeScript function that returns a Promise that resolves 
// with the value "Resolved!" after 3 seconds.
function resolveThis(milliseconds:number):Promise<void> {
    console.log('Q3: 3 sec delay is expected.')
    return new Promise((resolve)=>{
        setTimeout (()=>(resolve()),milliseconds)
    })
}
resolveThis(3000).then(()=>(console.log("Q3: Resolved!")))

// Question 4: Create a TypeScript function that uses async/await to wait for 
// two Promises to resolve and then returns their results as an array.

function firstResolve():Promise<string> {
    console.log('Q3: 3 sec delay is expected.')
    return new Promise((resolve)=>{
        setTimeout (()=>{
            console.log('Q4: Resolving Promise 1..');
            resolve('Promise 1 resolved');
        },2000
    )
    })
}

function secondResolve():Promise<string> {
    console.log('Q3: 3 sec delay is expected.')
    return new Promise((resolve)=>{
        setTimeout (()=>{
            console.log('Q4: Resolving Promise 2..');
            resolve('Promise 2 resolved');
        },3000)
    })
}

async function resolveBothPromises(): Promise<string[]> {
    let res1 = await firstResolve();
    let res2 = await secondResolve();
    let bothPromises = [res1, res2];
    console.log(bothPromises);
    return bothPromises;
}

resolveBothPromises();

// Question 5: Write a TypeScript function that uses async/await to wait for 
// a Promise to resolve and then logs the result to the console.

let asyncAwait = new Promise((resolve)=>{
    setTimeout(()=>resolve("Q5: Passed, got a level up."),4000) 
})

async function resultOfAwait(){ 
    {
        let status = await asyncAwait;
        console.log(status);
    }
}
resultOfAwait()

// Question 6: Write a TypeScript function that uses async/await to wait 
// for a Promise to reject and then logs the error to the console.

let rejectedPromise = new Promise((resolve, reject)=>{
    return setTimeout(()=>reject("Q6: Failed to level up."),5000); 
})

async function catchingError(){
    try{
        console.log('Status awaited..')
        await rejectedPromise
    }
    catch(error) {
        console.error("\nError: ", error);
        return error;
    }
}
catchingError();

// Question 7: Create a TypeScript function that takes a number as an argument and 
// returns a Promise that resolves with the square of the number after a delay of 1 second.

const sqrPromise = new Promise((res, rej) => {
    res(3)
})
.then((sqr: number) => {
    let val = sqr
    return new Promise<number>((res)=>{
        setTimeout(()=>{
        sqr = sqr ** 2      
        console.log(`\nQ7: Square of ${val} is ${sqr}.`);
        res(sqr);
        },7000)
    })
})

// Question 8: Write a TypeScript function that uses async/await to wait for an array 
// of Promises to resolve and then returns an array of their results.

function promises(num: number) : Promise<string> {
    return new Promise((resolve, reject)=> 
        setTimeout(()=>resolve(`\nThis promise number ${num} is resolved.`),1000))
    
    }
async function ResolvingPromises(prmiseInArray: Promise<string>[]): Promise<string[]> {
    let allPromises = await Promise.all(prmiseInArray);
    //console.log(allPromises);
    return allPromises;
}

//usage:
const asyncFunctions = [
    promises(1),
    promises(2),
    promises(3),
    promises(4)
];

ResolvingPromises(asyncFunctions)
    .then(results => {
        console.log('Results:', results);
    })
    .catch(err => {
        console.error('Error:', err);
    });

// Question 9: Create a TypeScript function that uses setTimeout to 
// call a function repeatedly every 2 seconds.

function taskRepeater() {
    let counter = 0
    function delayMaker() {
        counter++;
        console.log('\n',counter, '.','Function repeats the message every 2 seconds.')
        if (counter<4) {
        setTimeout(delayMaker, 2000)
        }
    }
    delayMaker();
}

taskRepeater();

// Question 10: Write a TypeScript function that uses async/await to wait for 
// a Promise to resolve and then returns a new Promise that resolves with the result multiplied by 2.

function multiply(num:number): Promise<number> {
    return new Promise((resolve)=> resolve(num*2))
}

async function multiplyWithPromise(num:number): Promise<number>{
    let product = await multiply(num)
    return new Promise ((resolve)=> {
        setTimeout(()=>{
            resolve(product)
        console.log(`\nQ10: Multiplied by ${num} and result is: ${product}`)
        },8000);
    })
}

multiplyWithPromise(2);