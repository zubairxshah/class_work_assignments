/* Question # 5
Write a function executeSequentially that executes two functions fetchData
and processData sequentially using Promises, and logs the results in the order they are called. */
// console.log('Checkin data status...')
// console.log()
// let fetchData = new Promise<string>((resolve) => {
//     resolve("Data fetched successfully!");
// });
// let processData = new Promise<string>((resolve) => {
//     resolve("Data processed successfully!");
// });
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 200);
    });
}
function processData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data processed successfully!");
        }, 1000);
    });
}
async function executeSequentially() {
    try {
        let data = await fetchData();
        console.log(data);
        let processedData = await processData();
        console.log(processedData);
    }
    catch (error) {
        console.error("Error:", error);
    }
    finally {
        console.log('Data job completed.');
    }
}
executeSequentially();
export {};
