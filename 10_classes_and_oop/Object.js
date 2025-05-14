function multiple5(num){
    console.log("ankit");
    
    return(num*5)
}
multiple5.pow = 4       //utilising the function as obj

// console.log(multiple5(6));
// console.log(multiple5.pow);
// console.log(multiple5.prototype);


function createUser(username, score){
    this.username = username            // this means iss context(createUser)
    this.score = score
}

createUser.prototype.increment = function(){    //creating self made protoype in the function rupi obj
    this.score++  
}

createUser.prototype.printavlaues = function() {
    console.log(`score is: ${this.score}`)
}

// console.log(createUser.prototype);      //properties are injected but cant be accessed

const ankit = new createUser('Ankit', '497')
const diksha = createUser('Diksha', '498')  //typeerror    
ankit.printavlaues()
diksha.printavlaues()
ankit.increment()
ankit.printavlaues()




// console.log(ankit.prototype); //TypeError: Cannot read properties of undefined| while passing the vlaue of function in name Ankit we didn't told it about its hidden properties


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/