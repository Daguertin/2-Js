/* ? Conditionals and Logic Gates
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

    let age >= 82
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
        * if you want your condition to display ONE exact match, chain your conditional statements (else if)*/

    c