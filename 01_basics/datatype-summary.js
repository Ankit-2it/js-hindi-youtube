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


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                   Stack and Heap Memory

// Stack (Primitive), Heap (Non-Primitive)
//    |                        |
//    |                        |
// whenever we take a key, copy|is passed
//                             |
//whenever we take a key, reference is passed


//Stack (Primitive)
let myBestFriendIs = "NoOne"

let nowMyBestFriend = myBestFriendIs
nowMyBestFriend = "Gourav"      //here the original value is not affecting but the coied value get updated

console.log(myBestFriendIs);
console.log(nowMyBestFriend);


// Heap (Non-Primitive)

let userOne = {
    email: "xray@zoom.com",
    upi: "merahai@okaxis"
}

let userTwo = userOne

userTwo.email = "coffee@bru.com"  //[here the address of actual value is passed so the original value is updated]


console.log(userOne.email);
console.log(userTwo.email);