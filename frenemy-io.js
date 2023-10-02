const readLine = require("readLine")
const rl = readLine.createInterface({input: ProcessingInstruction.stdin, output: ProcessingInstruction.stdout})

function ask(a) {
    return new Promise ((resolve, reject) => {
        rl.question(q, resolve)
    })
}
    
async function start() {
    let input = await ask("What is your name?")
    const enemies = ["Lord Voldemort", "Palpatine", "Darth Vador"]
    // for (i of enemies) {
    if (enemies.includes(input)) {
        console.log("Got away!!")
    } else if (input == "bye!") {
        rl.close
    } else { console.log("Welcome friend")
    } 
    // console.log(i)
    // rl.close()
    const input2 = await ask("How are you? \n good \n anything else \n your input: ")

    if (input2 == "good") {
        console.log("Great")
    } else {
        console.log("I don't really care, I'm German")
    }
}

start() 

    /* to continue convo
    const input2 = await ask ("How are you? \n good \n anything else\n your input:") 
    if (input2 == "good") {
        console.log
    } */



// code has been stored as:

/* const readline = require("readline")
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

function ask(q) {
    return new Promise((resolve, reject) => {
        rl.question(q, resolve)
    })
}

async function start() {
    let input = await ask("What is your name?")
    const enemies = ["lord voldemort", "palpatine", "darth vader"]
    if (enemies.includes(input)) {
        console.log("Go away!!")
    } else if (input == "bye!") {
        rl.close()
    } else {
        console.log(`Welcome ${input}`)
    }
    
    const input2 = await ask("How are you? \n good \n anything else \n your input: ")

    if (input2 == "good") {
        console.log("Great")
    } else {
        console.log("I don't really care, I'm German")
    }
}

start() */


/* 
    ?   Another example below:
function greeter(name) {
    name = name[0].toUpperCase() + name.slice(1).toLowerCase()
    if (name == "Luke skywalker" || name == "Palpatine" || name == "Lord voldemort") {
        console.log(`Go away, ${name}!!!!`)
    } else {
        console.log(`Hello, ${name}`)
    }
}

greeter("luke Skywalker")
greeter("palpatine")
greeter("lord voldemort")
greeter("paul") */