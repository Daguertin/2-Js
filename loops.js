/* 
? Loops
    *allows us to execute a block of code  repeatedly until an exit condition has been met


?   Traidtional for loop

?Syntax
    for (start; step) {
        code block to execute
    }
    
    * iterator - (ex: i) value that is a placeholder for a loop
    * iterable - ("ex: longWord") value we can re-iterate/loop over
    */

/*     for (let i=0; i<10, i = i + 1 ){
 */        console.log(i)
    // }
    
    // an infinate loop is a loop without a stop condition
    
/* 
? For-in Loop
    * allows us to seek an index number of an iterable against a condition
    * do not require an index number
    * does not require a stop statement
    * */
    
let longWordDE = "someverylongword"

for (i in longWordDE) {
    console.log(`Index: ${i} Letter: ${LongwordDE[i]}`)
}
// Control C stops an endless loop

/* 
? For-of Loop
    *allows us to seek iterable value against a condition
     */

    let longWordPL = "someextralongword"

    for (i of longWordPL) {console.log(i)
    }

    /* 
    ? for-of and for-in difference
        * for in allows to loop over items that are not an Array
        * for of works on indexed items only */

    /* 
    ! Challenge
    1
        * Create a variable with a sentence
        * Loop over the variable
        * If a letter is a vowel, increment count, print it
        * At the end, you should have a list of vowels and the total vowel count
    2
        * Reverse a string
        */
    
    // let (C = 0; C < 100; C = C + 1) {console.log(C)}
    let good = "successfully complete the course, or find ourselves leaving satisfied."
    for (C in "successfully complete the course, or find ourselves leaving satisfied.") {console.log(`Index: ${C} Letter ${"successfully complete the course, or find ourselves leaving satisfied."[C]}`)
}
    if (C = a, A, i, I, o, O, u, U, e, E, y, Y) {console.log([C])}
        // (Cin good)

//  I want to assign a counter with a max value
//  I want to assign a sentence as a variable
//  I want to apply that counter to the variable
//  Lable the counter as index for the #
//  Insert the counter into the sentence
//  Lable the counter as letter #
//  

let word = "Hi, nice to greet you"

let count = 0
for (ltr of word) {
    // if (ltr == "a" || ltr =="e" || ltr == "o" )etc {
        console.log(ltr)
        // count = count +1
        // is the same as count +=1
        count += 1
    }
// }

    console.log(`Total amount vowels is ${count}`)


    for (ltr of word) {
        console.log(ltr)
    }

    /* 
    ? While Loop
        *executes the statement in a code block
        * it does so as long as a while condition evaluates to true
     */

    /* 
    ? Syntax
    while(true) {
        do this until false}
    */

        let loop = 0

        while (loop <= 100) {
            console.log(loop)
            loop += 1;
            loop < 0
        }

        /* 
        ? Do While Loop
            * executes code in the do section while a condtion remains true
        ! If you like your instructor, you will spare him from aneryms and NOT use it plz

        let doCount = 0

        do {console.log(doCount)
        doCount += 1
    // }   while (doCount <= 100) */
