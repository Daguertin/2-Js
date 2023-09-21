/* 
    ? Promises
    * an object that may produce a singular value in the future

    ? Three States
    * Pending (unfinished)
    * Fulfilled (complete value result)
    * Rejected (error)
    
    * Promises allow other code to execute without having to wait for their completion
*/

function standard() {
    return "No promises here"
}

console.log(standard())

function promiseFx() {
    return new Promise((resolve, reject) => {
        // reject("A promise lies here")
        setTimeout(() => {
            resolve("After 3 seconds, it resolves")
        }, 3000);
    })
}

// console.log(promiseFx())
console.log("Code after the promise")

// ? In order to get tangible data out of a Promise object, we must resolve it

promiseFx()
    .then(msg => console.log(msg))
    // resolver that executes a function when a promise has been fulfilled
    .catch(err => console.log(err))
//  catch executes a function (fx) when a promise has been rejected (error handling)
    .finally(() => console.log("This code run after promise is done"))
    console.log("code after the promise")

    /* 
    ? Asynchronous Functions
        *introduced in ES7 
    */


