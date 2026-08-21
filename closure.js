const outer = () =>{
    let count = 0;

    const inner = () =>{
        count ++;
        console.log(count)
    }
    return inner;
}

const counter = outer();



counter();
counter();
counter();

//Explanation:
//1. When we call outer() function, it returns the inner() function and assigns it to the counter variable.
//2. When we call counter(), it increments the count variable and prints the value of count.
//3. The count variable is preserved in the closure, so when we call counter() again, it increments the count variable and prints the new value of count.