/* Question # 3
Write a function fetchData that returns a Promise which resolves with the 
string "Data fetched successfully!" after a delay of 1 second. */

console.log('Fetching data...')
function fetchData(milliseconds: number) : Promise<void>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, milliseconds)
    })
} 

fetchData(1000)
.then(()=> {
    console.log("Data fetched successfully!")
})

// let fetchData = new Promise((resolve)=>{
//     setTimeout(() => {
//         resolve("Data fetched successfully!")
//     },1000 )
// })

// async function fetchBlock(){ // adding async makes a function asynchronous
//     try{
//         let status = await fetchData // waits for the response from fetchData to execute first
//         console.log(status)
//     }
//     catch(error) {
//         console.error("Catch block", error)
//     }
// }
// fetchBlock()