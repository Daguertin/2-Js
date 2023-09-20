/* /* ? Conditionals and Logic Gates
    * conditonal statement checks if an expression is truthy
    * the expression must always resolve to true
    * if its truthy, a code within a statement executes
    * if it's falsey, nothing happens unless we specify otherwise

    ? Expression vs Statements
    *Expression
        * unprocessed value grouped within the ()
        * evaluated to be truthy
        * can be empty
        TODO: Expressions evaluate
    * Statements
        *keyword
        *expression
        *and code block
        TODO: Statments evaluate and execute code block when invoked
        ! Conditional is an example of a statement
        */

    /* ? If Statemnet
        * checks if something is true and executes the code
     */

        let lightSwitch = "on";
        console.log ("The value of the lightSwitch variable is", Boolean(lightSwitch))
        if (lightSwitch === "on") {
        console.log("The light is on"); }

        /* 
        ? Else If Statement
            *allow us to add additional condition(s) if the prior one has not been satisfied */

        let temp = 72; 
        {if (temp >= 80)
        console.log("It's hot!")}
        // else if {(temp >= 70) 
            console.log("A very good day")
        // }

        /* ? Else Statement
            if all else fails, execute this code */

        /* ? Logical Operators NOT AND OR
            * OR Operator ( || )
                * true if one condition is met
                * example: I will be happy to see one movie or the other
                * (movie 1 = true, movie 2 =true, both movies = true)
                * (no movie = false)
            * AND Operator (&&)
                * true if both conditons are met
                * ex: I will be happy if I watch both movies (movie marathon)
                * (both movies = true)
                * (one movie = false, no movies = false)
            * NOT Operator ( ! or in expression by ! =)
                *flips the logical expression
        */
        
        //  ? OR EXAMPLE

    let sensor = "on";
    let alarm = false;
    if (sensor == "active" || alarm) 
    // if (sensor == "inactive" && alarm)} (if alar is set to true)
{        console.log("The alarm may be on");
    }

    /* 
    ! Challanege
        * create an age variable with a number between 0-82
        * check if the age is under 16, say when they can't drive
        * if the age is between 16=18, say they can drive but not drink
        * if the age is between 18-21, they can vote but not drink
        * if the age is over 21, they can drink
    ! Spicey mode
        * how would you handle this if a user imputs nota  number? ex. "potato"
         */

    // (Could be simplified)
    /* let age >= 82
    if age >= 16 {
        console.log("they cant drink");
    }
    else if age << 16 && => 18 {
        console.log("they can drive but not drink");
    }
    else if age  =< 18 && << 21 {
        console.log("they can vote but not drink");
    }
    else if age > 21 {
        console.log("Cmon Barbie lets go party");
    }
    else {
        console.log ("I am sorry that is input is incorrect");
    }

    /* 

    ! Important Thought
        * if you want your condition to display any possible match create (if) statements (not else if) 
        * if you want your condition to display ONE exact match, chain your conditional statements (else if)
        * */

    /* 
    ? Ternaries - (condition ? expression(if true) : expression(if false))
        * an expression
        * a quick way of creating if/else conditionals
        * commonly used to check a quick condition
        
        */

    let ignition = true;

    ignition ? console.log("Car is ready to start") : console.log("Turn ingnition on");
 
    /* ? Chaining Ternaries ( ? (expression if true) 
    : else if expression ? expression if true
    : else if expression ? expression if true
    : else if expression ? expression if true
    : else or null
        
    ! IF you do not have an else statement, you must use a null to avoide Syntax Error
     */

    if (season == 1) {
        console.log("spring");
    } else if (season == 2){
        console.log("summer")
    }
    
    season == 1 ? console.log("spring")
                : season == 2 ? console.log("Summer")
                : season == 3 ? console.log("Fall")
                : season == 4 ? console.log("Winter")
                :null

 /*                (Could be simplified)
    let age = 82
    
        age < 16 ? console.log("Cannot drive");
            : age < 18 ? console.log("Can drive");
            : age < 21 ? console.log("Can vote")
            : age > 21 ? console.log("Have a drink");
            : console.log("Enter valid number");

    /* Switch Statements
        * execute a block of code dependent upon a different case
        * we ask a question requiring specific response determined by our answer */

    let uprightinstructor = "Dan"
    // condition that cases are compared against (switch statement)
    // execute the code below 
   /*      case "Dan": */
            console.log(`${uprightinstructor} is a Senior Lead SD`)
            // used to stop other cases from evaluating (break)
            /* break */
/*         case "Rob":
/*  */            console.log(`${uprightinstructor} is a Lead SD Instructor`)
 */            break/*
/*         default:
 */            console.log(`${uprightinstructor} may not work here`)
 */ */