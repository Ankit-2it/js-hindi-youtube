var c = 45              // Global Variable
var d = 25
let a = 20
// Scope:
{
    let a = 100         // Local Variable
    const b = 200
    var c = 300
    d = 600

    console.log('inner a = ',a);
    
}

// console.log(a);     // ReferenceError: a is not defined
// console.log(b);     // ReferenceError: b is not defined

// console.log(c);     // 300 | var datatype is accessible outside the scope
// console.log(d);     // 600

console.log("outer a = ", a);
