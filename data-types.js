console.log ("Hello world!");

/* 
    ? JavaScript
    *was founded in 1996 by Brandon Eich
    *client-side language (runs in the browser)
    *interpreted language (reads left to right), not compiled (compiled -reads all the source file before execution)
    *first-class-funtion -functions are treated like any other variable
    *functional language
    *objected-oriented language
    *prototype-based
    *imperative
    *weakly typed (dynamic)
    *multi-paradigm language
    *ECMAScript - organization setting language standards
    */

/*? Comments 
*blocks of code that are not being interpreted
*denoted by // for single-line
*denoted by /* for multi-line
*comments are read but not executed
*as learners, it helps us with note taking
*as devs, it documents our code making it more maintainable
*Alt+shift+A creates a mutli line comment, cntrl+/ creates a single line
*/ 

/*
    ? Console object
    * give us access to the browser or node's debgging in console
    *allows the developer to view output from their program
    
    */

    /* 
    ? JS Data Types:
    Primitive
        *string
        *number
        *boolean
        *null
        *undefined
        *not a number (null)
    Reference
        *array
        *object
        *map
        *set
    */

    /* ?Strings
    *primitive data type representing characters
    *enclosed in '', "", or ``
    *We can concatenate different strings (add them together)
    *strings are indexed starting from zero ("0")
    LOOK BELOW
    Index value returns letter (H...counting from 0 until 5, [5])
    console.log("Porschedoppelkupplungsgetriebe"[5])
    ! Strings are immutable (cannot be changed)
     */

    /* ? String Interpolation (` `) 
    * a process of including space for an expression
    Syntax:
        'string ${ expression } string'
        ex. console.log (`my name is paul and I am ${20 + 6 years old}`)
        compared to this...
        ex. console.log(`my name is paul and i am, 20 + 6, years old`)
        The lower example creates 3 different strings 
    */

    /* 
    ? String Methods
        *.length (starts at 1, not "0")
        *slice()
        *.toUpperCase()
        *.toLowerCase()
        */
    
        console.log("Thecolorofthebarnisbrightblue")
        console.log("Daniel Guertin".slice())

/* Multi-line strings -using escape character "\n"
console.log (Paul Niemczyk, 123 main st \n 213 234 234") */

/* 
    ? Numbers
    *any integer or decimal
     */

    console.log(25);
    console.log(3.14);
    console.log(typeof 1776);
    console.log(0.2 + 0.1);
    console.log(Number.MAX_SAFE_INTEGER);
    console.log("Hello");

    /* ? Booleans
    *Binary value
    *either true (on) ir false (off)
    *Examples of falsey values
        *0
        *undefined
        *null
        *NaN (Not a number)
        *"" 
        (Are all falsey values)



    */

    // Boolean() interface returns weather a value is truthy of falsey
    console.log(Boolean(1));
    console.log(Boolean(0));
    console.log(Boolean(""));
    console.log(Boolean())

    /* ? Type Coercion
        *JS is a weakly typed programming language (duck typed)
        *doesnt require data type definition
        *(==) will check values but not data types
        *comparison opreator (==) performs type coercion before resolving expression
        *(===) will check values AND data types
        *we can use strict equality (===) to avoide type coercion
        ex. if you add 2+2 you get for... but if you add 2+"2" you get 22
        this is because js is a coercion program and tries to redefine 2 as a string

    */

console.log(2+2) 

/*? Not a Number (NaN) 
    *triggered when performing operations with numbers and non-numbers
ex. console.log(undefined + 5);
    *used when performing mathematical computations that dont make sense 
ex. console.log(math.sqrt)(-1)) returns NaN as sqrt of a negative number is an iMAGINARY number*/

/* ? Null and underfined
    *null -there is a space for it.. but nothing in it)
    *undefined -there is nothing defined there
    ex. picture frames... if the frame is there and has a blank photo. it has no photo
    ...if the frame is there with no photo... it would be null (placeholder). 
    However, if there was nothing but a wall... (lack of existance) it would be undefined
    */

/* ? Operators
    *addition (+)
    *subtraction (-)
    *multiplication (*)
    *division (/)
    *exponent (**)
    *dot (.)
    *modulo (%)
    *assignment (=) <- single
    *comparison (==) <- double
    *strict comparison (===) <- triple
    *is not equal to or is strictly not equal to (! = or ! = =)

    Dot or member access operator
    console.log("Dan Guertin".length);

    Modulo ---> remainder of long division
    console.log(10 / 2); (to figure out if it goes in perfectly do)
    console.log(10 % 2); (it says 0 because it returns the amount)

    Assignment Operator 
    let myName = "Dan" //assigns value of dan to the variable (myName)
    console.log(myName)

    Comparison
    console.log(myName == "Dan") (True) (double)

    strict comparison
    console.log (678 === "678") (false) (triple)

    Is not equal to -> Flips values
    console.log(2=2)true, console.log(2!=2)false (returns false even though true)
    console.log(2!==2)returns false (flips the value)
    
    Real life example
    if (myName === false) {n
        console.log("No name");}
        else {
            console.log(myName);}
        }

    }
*/

