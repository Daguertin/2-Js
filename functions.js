/* 
    ? Functions
    * a block of reusable code. It can:
    * take in parameteres (doors to the inside of your fx)
    * perform an action
    * return a result
    * need to be invoked (called) to run
    * can have none, one, or many parameters
    * data coming throught the parameters is called an argument
    * can only have one return statement value
    * if no return is provided, it defaults to undefined

    ? There are two types of functions
    * function declaration
        * are hoisted
    * function expression
        * are not hoisted

    ?   Syntax
    function indentifier (parameter, parameter, ...) {
        function code block
        return statement
    }

*/

// Function Declaration
function sayHello() {
    return "Hello September Cohort"
}

let holdingFunctionReturn = sayHello()

console.log(holdingFunctionReturn)

function greetLearner(learner) {
    return `Welcome to my class, ${learner}`
}

console.log(greetLearner("Paul"))
console.log(greetLearner("Julia"))
console.log(greetLearner("Isiah"))
console.log(greetLearner("Brandon"))

function addNums(num1, num2) {
    return num1 + num2
}

console.log(addNums(0, 1))

/* 
? Function Expression
    *utilizes a variable as a placeholder
    
? Syntax:

let identifier = funtion(params){
    code block
    return statment
}
*/

let nameAge = function(name, age){
    return `Your name is ${name} and you're ${age} years old.`
    }
console.log(nameAge("Dan", 28))

/* 
! Challenge
    *create a function that will give
    you a result of a quadratic formula
    based on all necessary inputs
    *check if the data type is a Number. If not,
    return "please use whole numbers only"
    *The quadratic formula is (-b+-sqrt(b**2 - 4*a*c))/2a 
    *Remember PEMDAS!
    */

    let quadraticforumla = function(a, b, c) {
        let sqrtResult = Math.sqrt(b**2 -4 * a * c)
        if (isNaN)(sqrtResult) =>
        {   return "Please return whole numbers which result in a positve"
        }
        let addResult =(-b + sqrtResult) / 2 * a
        let subResult =(-b - sqrtResult) / 2 * a
        return `The solution is ${addResult} and ${subResult}`
    // console.log(sqrtResult, addResult, subResult)    
}
// quadraticforumla(1, -11, 24)

/* 
? Arrow Functions
    * introduced in ES6
    * concise way of writing functions
    * part of the fx expression family
    * do not bind to .this or super (more on that in classes) 
    * */

/* 
? Concise Body Arrow Functions
    *can only have no or one parameter
    * code block must not have { }
    * return statement must be implicit
*/
// => is similiar to saying `function`
let greetMD = drName => `hello, Dr. ${drName}`
console.log(greetMD("Max"))

// Without a parameter
let greetEveryone = () => `Hello Everyone`
console.log(greetEveryone())

/* 
? Block Body Arrow Functions
    * allows the use of explicit return statement
    * can have as many params as you want 
*/
let concatenateStr = (str1, str2) => {
    if (typeof str1 === 'string' && typeof str2 === "string"){
        return str1 + str2
    } else {
        return "You can only pass string values as arguments"
    }
    console.log(concatenateStr("Brandon", "Hoffey"));
}

/* 
? Immeaditely Invoked function Expression (IIFE) 
    *Functions that run as soon as they are declared
*/
(function() {
    console.log("IIFE")
})()

/* 
    ! Pythagrean Theorem Challenge
        * right angle triangle has 3 sides
        * the longest side c is calculated by taking the sum of:
        * a**2 + b**2
        * The formula is as follows c = sqrt(a**2 + b**2)
        * Create a function that takes the two triangle sides
        * Returns the hypothenuse
        * Use a block body arrow function
        *  */

    const Pythagrean = (a, b) => {
        typeof a != "number" || typeof b != "number"
        ? `Please enter a valid number`
        : Math.sqrt(a ** 2 + b ** 2)
    }

    console.log(Pythagrean(5, 7))

    /* 
    TODO: HINT - Ternaries are expressions, not statements
        * they need to be "located/captured" in their entirety into a seperage placeholder
    (variable) (think of boxes and content)
        * then that variable can be returned for the function to return something other than
    undefined.
     */