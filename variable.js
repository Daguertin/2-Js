/* ?Variables
    *containers that store data in memory
    *declaration
        *allows memory space to be reserved using and indentifier
        *starts with let, var, or const keyword
        *cannot start with a number or character other than $ or _
        * if no value is assigned, its undefined
    *initilization
        *assignment of data value
        * can be any value or data type (str, int, arr, fx, class, etc.)
        * can be reassigned (except for const) */

        // Variable declaration
        let firstName
        console.log(firstName);

        // Variable declaration and variable initilization
        let lastName = "Guertin";
        console.log(lastName);

        // Reassignment
        firstName = "Daniel";
        console.log(firstName);

        // ? String Concatenate your instructors name
        console.log (firstName + lastName);

        // ? String Interpolate your instructor's name and assign it to fullName variable
        let fullName = `${firstName} ${lastName}`;
        console.log(fullName);

        // (a) (b) (c)          (d)
        let address = "123 Main St, Salem, MA"
        //  (e) =        (f)

        /*  *a - keyword
            *b - variable indentifier
            *c - assignment operator
            *d - value or initializer
            *e - variable declaration
            *f - variable initilization or value assignment */

        // ? Var is hoisted whereas let is not
        // ! Do Not Use !
        var age = 26;
        console.log(age);

        // ? Const variable CANNOT have a reassigned value
        const ssn = "234-23-9982";
        console.log(ssn);
        // ssn = "222-22-2222"; (error, cannot be reassigned) (typeError)

        /* ? Coding Practices for Variables
            *be conscise (ex: firstName instead of usersFirstBornBlondeHairedName)
            *be specific (ex: item instead of i)
            *utilize camelCase (most popular in JS)
            *snake_case
            *PascalCase
            *skewer-case
            -nocase
            *SCREAMING_CASE (used for env variables, etc.) */

            /* 
                ! Challenge
                * set variable of fName, lName, houseNumber, aptNum (if applicable)
                *street, city, state, post code
                *Concatenate or interpolate them together into a variable called addressStamp
                *console log it
                ! Spicy Mode
                *assign the state value to be lowercase, but when you console log, it should capatalize the state
                cl */

                let fName = "Dan";
                console.log(firstName)
                let lName = "G"
                let houseNumber = "123"
                let aptNum = "#1"
                let street = "Maine Way";
                let city = "Essex"
                let state = "Colorado"
                let postCode = "12312"

                let addressStamp = `${fName + lName +houseNumber + aptNum + street + city + state + postCode}`;
                console.log(addressStamp);





