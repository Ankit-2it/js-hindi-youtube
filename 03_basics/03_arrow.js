//arrowFunction -> this -> object

const user = {
    name: "Ankit",
    price: 234,

    welcomeMessage: function(){
        console.log(this.name);      //'this' reffers to the current context
        console.log(this);
        
    }
}
// user.welcomeMessage()
// user.name = "Disha"
// user.welcomeMessage()

// console.log(this);      // { }  empty object as not inside any context
                        // here the simple 'this' returns empty obj
                        // but 
                        // in Browser's console,  Window is the global object



// function one(){                      //checking this for functions
//     let name = "Ankit Prasad"
//     console.log(this);      // different properties displays 
//     console.log(this.name);    // Undefined
// }                               // this doesn't work for function same way
// one()



    // const one = function(){
    //     let name = "Ankit Prasad"     
    //     console.log(this.name);    // Undefined
    // }
    // one()



// const one = () => {
//     let name = "Ankit Prasad"
//     console.log(this);          // {}  | different properties does not shows for arrow function
//     console.log(this.name);    // undefined
// }
// one()



// const sum = (num1, num2) => {
//     return num1 + num2          //Explicit return by writing "return" keyword
// }
// console.log(sum(2,5));



// const sum = (num1, num2) => num1 + num2          //Implicit return without writing "return" keyword

// console.log(sum(2,5));



// const sum = (num1, num2) => (num1 + num2)       // () doesn't require 'return'
//                                                 // {} does require
// console.log(sum(2,5));


const sum = (num1, num2) => ({num1 : 2, name : "Ankit"})       
                         // if we have to return Object Implicitly, use()
console.log(sum(2,5));