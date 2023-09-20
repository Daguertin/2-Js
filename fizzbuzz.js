let c = 0
for (let c = 0; c <= 100; c = c + 1) {console.log(c)}
if (c % 3 == 0) {console.log("fizz")
} else if (c % 5 == 0) {console.log("buzz")
} else if (c % 3 == 0 && c % 5 == 0) {
    console.log ("fizzbuzz")
} else {
    console.log(c)
}

// HINT: Least common occurance goes first (helps with logic flow)

// function fizzbuzz(start, stop)
    for (let c = 0; c <= 100; c = c + 1) {console.log(c)}
    if (c % 3 == 0 && c % 5 == 0) 
    {console.log ("fizzbuzz")
    } else if (c % 5 == 0) {console.log("buzz")
    } else if (c % 3 == 0) {console.log("fizz")
    } else {
    console.log(c)
    }