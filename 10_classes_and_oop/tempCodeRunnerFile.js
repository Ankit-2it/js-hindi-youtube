function createUser(username, score){
    this.username = username            // this means iss context(createUser)
    this.score = score
}

createUser.prototype.increment = function(){    //creating self made protoype in the function rupi obj
    this.score++  
}

createUser.prototype.printavlaues = () => {
    console.log(`score is: ${this.score}`)
}

// console.log(createUser.prototype);      //properties are injected but cant be accessed

const ankit = new createUser('Ankit', '49')
ankit.printavlaues()