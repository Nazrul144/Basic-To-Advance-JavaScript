console.log("A")

setTimeout(() =>{(
    console.log("Settimeout is printied")  //Macrotask:
)},0)

Promise.resolve().then(()=>{
    console.log("Promise is printed") //Microtask:
})

console.log("D");



//Output: ADCB

//Explanation:
//1. First A is printed.
//2. Then D is printed.
//3. Then Promise is printed because it is a microtask and it has higher priority than macrotask.
//4. Finally Settimeout is printed because it is a macrotask and it has lower priority than microtask.

