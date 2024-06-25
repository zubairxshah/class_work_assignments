// // Async TS/JS ~ Date 20-June-24 by Sir Hamza Alvi
// console.log("Order 1"); // print order 1       
// setTimeout(() => {
//     console.log("Order 2"); // wait order 3
// }, 5000); // wait 5 sec
// console.log("Order 3"); // print order 3
// // Remove the previous declaration of firstfunc
// let newFirstFunc = (cb1: string) => {
//     console.log(cb1);
// };
// let helloWorld = () => {
//     console.log("Hello World 2");
// };
// // print Hello 1 & Hello 2
// newFirstFunc("Hello 1");
// helloWorld();
// let myPromise = new Promise((resolve, reject) => {
//     resolve(4);
//     }).then((resp: any) => {
//         console.log(resp);
//         return resp * 3; // response0
//     }).then((resp1: any) => {
//         console.log(resp1 * 1); // 12
//         return resp1;
//     }).then((resp2: any) => {
//         console.log(8); // 8
//         return resp2;
//     }).then((resp3: any) => {
//         console.log(3); // 3
//     });
// Addition using a delayed response
const promise2 = new Promise((res, rej) => {
    res(3);
})
    .then((addition) => {
    return new Promise((res) => {
        setTimeout(() => {
            addition = addition + 3;
            console.log(addition);
            res(addition);
        }, 2000);
    });
}).then((product) => {
    let multiple = product * 4;
    console.log(multiple);
    return multiple;
});
function promise3() {
    new Promise((res, rej) => {
        rej('Not processed');
    })
        .then((value) => {
        value = 'Completely ';
        console.log(value, 'Processed');
        return value;
    })
        .catch((value) => {
        value = 'Not processed';
        console.log(value);
        return value;
    });
}
promise3();
function resolveThis(milliseconds) {
    console.log('Q3: 3 sec delay is expected.');
    return new Promise((resolve) => {
        setTimeout(() => (resolve()), milliseconds);
    });
}
resolveThis(3000).then(() => (console.log("Q3: Resolved!")));
export {};
