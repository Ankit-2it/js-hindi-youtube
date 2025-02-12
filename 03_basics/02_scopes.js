var c = 45              // Global Variable
var d = 25
let a = 20
let z = 13
// Scope:
{
    let a = 100         // Local Variable
    const b = 200
    var c = 300
    d = 600

    // console.log('inner a = ',a);

    // console.log("outer z = ", z);    // Global variable can be accessed inside the scope
                                     // Local variable can't be accessed outside the scope
    
}

// console.log(a);     // ReferenceError: a is not defined
// console.log(b);     // ReferenceError: b is not defined

// console.log(c);     // 300 | var datatype is accessible outside the scope
// console.log(d);     // 600

// console.log("outer a = ", a);




// ++++++++++++++++++++++++++++++ Nested scope ++++++++++++++++++++++++++++++++++

function global(){
    let userName = "Ankit Kumar"

    function local(){
        let localvariable = "Z"

        console.log(userName);
    }
    local()

    // console.log(localvariable);    //ReferenceError: localvariable is not defined
    
    
}
// global()

// Closures are similar concept

if(true){
    let userName1 = "Prasad Ankit"

    if(userName1 == "Prasad Ankit"){
        // console.log("bingo");
        const surname = "kumar"
    }
    // console.log(surname);
    
}
// console.log(userName1);



//++++++++++++++++++++++++ Interesting +++++++++++++++++++++++++++

console.log(addOne(5));         //can access bedore declaration

function addOne(num){
    return num+1
}
// addOne(5)


console.log(addTwo(5));     //ReferenceError: Cannot access 'addTwo' before initialization

const addTwo = function(num){
    return num+2
}
// addTwo(5)