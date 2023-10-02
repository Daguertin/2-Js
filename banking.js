// let deposit = 0 + ()
// let withDrawel= 0 + -()
// `${deposit}` + `${withDrawels}`
// let aBalance = 0 
// let createAccount = account => `Good day, your account balance stands at ${aBalance}`
// Remember this style!! let greetMD = drName => `hello, Dr. ${drName}`
// and this   for (let i=0; i<10, i = i + 1 ){
// console.log(i)

// for(let aBalance = 0 + `${deposit}` + `${withDrawel}`) {console.log(`You're account balance stands at ${aBalance}`)}

/* Create a simple banking application in JavaScript without using closures. Implement the application 
using functions, conditionals, loops, and variables to manage a bank account.
    Write a createAccount function that initializes an account with an initial balance. 
    This function should return an object containing the following methods:
    deposit(amount): Deposits the given amount into the account. If the amount is positive, add it 
    to the balance and display the new balance. If the amount is negative or zero, display "Invalid 
    deposit amount. Please enter a positive number."
    withdraw(amount): Withdraws the given amount from the account. If the amount is positive and 
    there are sufficient funds, subtract it from the balance and display the new balance. If the 
    amount is negative, zero, or there are insufficient funds, display "Invalid withdrawal amount" 
    or "Insufficient funds" accordingly.
    checkBalance(): Displays the current account balance.
    Create a new account using createAccount with an initial balance of $1000.
    Perform various banking operations on the account to test your code. Display the results of each 
    operation. */


    /* Paul Approach "teacher"
    funtion createAccount(initial){
        return initial
    }
    
    let paulsChecking = createAccount (1000)
    console.log(paulsChecking)

    function deposit(amt, acct) {
        if (amt > 0 {
            acct += amt
            console.log("Current balance, acct")
            } else {
                console.log("Enter positive number")
            }
        }
        
        deposit(100, paulsChecking)

        function withdraw(amt, acct) {
            if (amt <= 0) {
                console.log("Incorrect amt")
            }if (amt > acct) {
                console.log("Insuffient")
            } else {
                acct -= amt
                console.log("current balance, amt")
            }
        }

        function checkBalance(acct) {
            console.log("Current balance, act")
        }
        checkBalance(paulsChecking)
        console.log("Exisiting amt", acct)
        acct += amt
        console.log(acct)
    deposit(500, paulsChecking)
    console.log(paulsChecking ) See that this 
    is an issue. Because arguments are passed
    by value, paulsChecking will still claim 1000
    at the end. Because it does not = 1000
    but has a peremeter of 1000. 
    ** If a function changes and arguments value it does not change the parameters
    original value!!! This is something to be aware of 
    */


    // ! Class notes are below

    /* function createAccount(initial) {
    return initial
}

let paulsChecking = createAccount(1000)

console.log(paulsChecking)

function deposit(amt, acct) {
    if (amt > 0) {
        acct += amt
        console.log("Current balance", acct)
    } else {
        console.log("Enter positive number")
    }
}

// deposit(100, paulsChecking)

function withdraw(amt, acct) {
    if (amt <= 0) {
        console.log("Incorrect amount")
    }
    if (amt > acct) {
        console.log("Insufficient balance")
    } else {
        acct -= amt
        console.log("Current balance", acct)
    }
}

// withdraw(1100, paulsChecking)

function checkBalance(acct) {
    console.log("Current balance", acct)
}

checkBalance(paulsChecking) */