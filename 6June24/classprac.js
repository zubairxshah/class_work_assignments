let lastName = 'Shah';
function addLastName(name) {
    return lastName;
}
function addNames(firstName, lName) {
    console.log(firstName, ' ', lName());
}
addNames('Lord', addLastName);
function myCallBack(text) {
    console.log("inside myCallback " + text);
}
function callingFunction(initialText, callback) {
    callback(initialText);
}
callingFunction("myText", myCallBack);
function delay(milliseconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, milliseconds);
    });
}
//Using `then`, `catch`, and `finally`:
delay(1000)
    .then(() => {
    console.log('The delay is over');
})
    .catch((error) => {
    console.error('Something went wrong:', error);
})
    .finally(() => {
    console.log('This is always executed');
});
//Using `async/await`:  
try {
    await delay(1000);
    console.log('Await: The delay is over');
}
catch (error) {
    console.error('Await: Something went wrong:', error);
}
finally {
    console.log('Await: This is always executed');
}
export {};
