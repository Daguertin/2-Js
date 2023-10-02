// ? Scope & Hoisting

/* 
? Scope
    * used to determine how information in different code-blocks
can be accessed.

? Five Scope Types
    * Global/window
    * Block
    * Function
    * Module
    * Lexical
    
? Global Scope
    * outmost scope
    * window object when in client
    * js file when in Node
    * accessible from every other scope
*/
let globalScopeVariable = "This is a global scope variable"
(((((((((((console.log(globalScopeVariable))))))))))))

/* 
? Function Scope */

function scope() {
    let fxScopeVariable = "This is a function scope variable"
    console.log(fxScopeVariable) }

    scope()
    console.log(fxScopeVariable)
    // console.log(fxScopeVariable)// ReferenceError
    // cannot run this scope inside of global
    
    /* 
    ? Block Scope
        *anywhere there are {}
         */
        {
            let blockScopeVar = "Block scope variable"
            console.log(blockScopeVar)
        }
        // console.log(blockScopeVar) // ReferenceError

    /* 
    ? Lexical Scope
        * variables are accessible by their nested position
        * inner fx scope can access outer fx scope
        */
    
    function outerFx() {
        //  outer fx scope
        let ofxv = "Outer fx scope variable"

        function innerFx() {
            // inner fx scope
            let ifxv = "Inner fx scope variable"
            console.log(ofxv)
            return ifxv
        }
        
        return innerFx
    }

    console.log(outerFx())

    /* 
    ? Module Scope
        * encapsulates objects nested inside of other modules or files
        * allows the use in other files
        
        ex. module.exports = file reference (export a file code to another)
        (new file this command points to the last file for retrieval) const capitalize =require("./capitalize")
        console.log(capitalize(pAUL))*/

        /* 
        ? Hoisting
            * JS reads top to bottom, left to right
            * JS interpreter runs the code twice
            * first it looks for VARiables and fx declarations and hoists them
            * it allocates memory space for those declarations
            * it then executes the code line-by-line*/
        // let myName (variable declaration) = 
        // "Dan" (value initialization)
        // console.log(myName) //Reference Error


        // console.log(age) //Returns undefined
        // var age = 30
        // console.log(age) // Returns 30

        // ? Function declarations are hoisted
        x()
        function x() {
            console.log("Function declaration")
        }

        // y() // ReferenceError
        let y = function() {
            console.log("Function expression")
        }
        // y()

        function run () {
            var foo = "foo"
            let bar = "bar"
            console.log(foo, bar) 
            {
                var moo = "moo"
                let baz = "baz"
                let fxVariable = "test"
                console.log(moo, baz)
            }
            // console.log(baz) // Reference Error: scoped to immeadiate Block
            // console.log(moo) // ? Works: scoped to immeadiate function block
        }
        run ()
        // console.log(fxVariable) ReferenceError
        // ! THIS IS BAD! Don't use hoisting to your "benefit"!!!

    {   
        {
            var something = "this is something"
        }
    }
    console.log(something)
    // ? This works because global scope is also considered a function scope

    // A solution to a problem below, now.. what is the problem?
    const divisible = (divident, divisor) => {
        return (divident % divisor) === 0 ? true : false
    }
    
    // console.log(divisible(6, 3))
    // console.log(divisible(5, 2))
    
    const divisibleBool = (divident, divisor) => {
        return !Boolean(divident % divisor)
    }
    
    console.log(divisibleBool(6, 3))
    console.log(divisibleBool(5, 2))
