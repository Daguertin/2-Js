/* 
    ? IO & Callbacks
    * Process
        * an event that runs in the background or foreground of your machine
    * Node.js allows access to its processes via process object
    * this allows us to process external input and internal output (IO)
    * we do this by using process.stdin and process.stdout
*/

// Import statement
const process = require("process")
console.log(`This is an output. From Node proccess PID:${process.pid}`)

// Run in a loop below (un-needed)
// while (true) {
//     console.log(process.pid)}

/* 
? Callback Function
    * fx that is passed as an argument to another fx or method
    * is a fx that runs when something occurs
    */
console.log("Please enter some input")
// Process.stdin.once("data", input => {
//     console.log(`this is our ${input} being repeated:`)
// process.exit})

//  or re-written

// process.stdin.once("data", function(input) {
//     console.log(input.toString())
//     process.exit()
// })

// or re-written again

// function handleInput(input) {
//     console.log(input.toString())
//     process.exit()
// }

//  ? Passing function by reference
    // process.stdin.once("data", handleInput)

    // Process.stdin.on("data", handleInput)

    // .on() method allows us to continually listen to a data stream

    // (.toString is important from taking the input and putting into a string that can be understood, producing a legable output)
    
    //   (1)    (2)  (3) (4)              (5)
    /*  process.stdin.on("data", input => console.log(input.toString()))
        * 1. Node's Process Interface
        * 2. In Data Stream
        * 3. Event Listener Method
        * 4. Event we're listening to
        * 5. Callback fx which rus when the event occurs
    */

// Process.stdout is the same as conlog
    // Process.stdout.write("What is your name?")
    // Process.stdin.on("data", input => {
    //     let value  = input.toString().trim()
    //     value == "Dan"
    //         ? process.stdout.write("Get outt here!")
    //         : process.stdout.write("Finally someone smart!")
    //         process.exit()
    //         })

    // This is useful for pulling information from outside
    // applications for data (Imagine that you want to monitor your plant temperatures, stndin, stndout)

    /* 
    ? Readline
    
    const readLine = require("readLine")

    const rl = readline.createInterface({input: process.stdin, output: process.stdout })

    rl.question("What is your name", input => {
    rl.setPrompt(`Hello ${input}`)
    rl.prompt()
    rl.close
   }) */

    async function ask(question) {
    return new Promise((resolve, reject) => {
        rl.question(question, resolve)
    })
}

async function start() {
    const firstQuestion = await ask("What is your name?")
    console.log(firstQuestion)
    const secondQuestion = await ask("What is your age?")
    console.log(secondQuestion)
    rl.close()
}

start()

