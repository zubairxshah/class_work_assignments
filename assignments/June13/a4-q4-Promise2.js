/* Question # 4
Write a function fetchWithError that returns a Promise. It should randomly either
resolve with "Data fetched successfully!" or reject with "Data fetch failed!"
after a delay of 1 second. Handle the rejection using .catch */
console.log('Checkin data status...');
console.log();
let fetchWithError = new Promise((resolve, reject) => {
    const randomizer = Math.random() >= 0.5;
    setTimeout(() => {
        if (randomizer) {
            resolve("Data fetched successfully!");
        }
        else {
            reject("Data fetch failed!");
        }
    }, 1000);
});
async function tryCatch() {
    try {
        let status = await fetchWithError;
        console.log(status);
    }
    catch (error) {
        console.error(error);
    }
}
;
tryCatch();
export {};
