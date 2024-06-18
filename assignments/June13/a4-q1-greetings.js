/* Question # 1
Write a simple asynchronous TypeScript function fetchGreeting that returns
a greeting message after a 2-second delay using setTimeout. */
console.log("Count to 2 to see a greeting message");
let timeOut = setTimeout(fetchGreeting, 2000);
function fetchGreeting() {
    console.log("Hello World!");
}
;
export {};
// setTimeout (anotherGreeting, 2000, "Hello World!")
// function anotherGreeting(message: String) {
//     console.log(message)
// }
