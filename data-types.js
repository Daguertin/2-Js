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
    
        console.log("Thecolorofthebarnisbrightblue".length())
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
    