// datatypes can be defined based on: 
        // 1) how we store them in memory
        // 2) how do we access them

// Based on that, 2 Types only:-



//         1) Primitive (call by value, whenever call -> a copy is passed and the changes is done into it [memory location is not given])

// 7 types: Strings, Number, Boolean, Null, Undefined, Symbol, BigInt

// JS is a Dynamic Language

const score = 45;
const isLogin = true;
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const id2 = Symbol('123')

console.log(id === id2);

// const bigValue = 123324456678976908n




//         2) References (Non-Primitive)  [memeory location is given]
// Types: Array, Object, Function

const heros = ["Ankit", "KumarAnkit", "Gourav"]
let myOby = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);


// https://262.ecma-international.org/5.1/#sec-11.4.3