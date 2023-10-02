/* 
    ? Promises
    * an object that may produce a singular value in the future
    * This is useful for when you have to/choose to wait and then (recall) the object

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
        }, 3000);})
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
        * introduced in ES7 
        * alternative to writing promises
        * a function that returns a promise object
        * allows us to resolve or reject a promise
        
    ? Syntax
    async function myFx { }
    const myFx = async function() { }
    const myFx = async {} => { }
    */

    async function asyncmyFx() {
        return"Hello learners!"
    }

    console.log(asyncmyFx())

    // ? How do we get value out of asyncs then???
/* 
    * use a resolver
    asyncFx().then(msg => console.log(msg))
    * use an await keyword inside of another async fuction

? Await Keyword
    *can be utilized only inside of async function
    *tells JS we must wait on a promise returning fx before moving on
*/
async function start() {
    // waits for resolution of a promise
    const result = await asyncmyFx()
    console.log(result)
    console.log("code runs after await b/c await maintains order")
    }

    start()

    function getData() {
        setTimeout(() => {
            return "Isaiah"
        }, 3000);
    }
    
    let name = getData()
    console.log(name)

