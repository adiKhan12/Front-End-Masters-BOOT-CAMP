/* Sometimes functions are also called procedures */

function addnum(num1, num2){
    return num1 + num2;
}

console.log(addnum(2, 2));


/* Scope */

function ScopeA(){

    let someVar = "hello how are you";
    return someVar;
}

let newFunc = ScopeA();

/* console.log(someVar);  someVar is not define so someVar is not in outer scope */

console.log(newFunc)


/* builtins */

let sentence  = "hello how are you my friend...";

console.log(sentence.toLowerCase())

console.log(Math.round(5.263))

console.log(sentence.substring())