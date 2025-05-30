// ES6 

class user {
    constructor(name, email, password){
        this.name = name;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return(`${this.password}#abc`);
    }

    changeName(){
        return `${this.name.toUpperCase()}`
    }
}

const Ankit = new user('Ankit', 'dikshu@789', 'yippi')


console.log(Ankit.encryptPassword());
console.log(Ankit.changeName());






// ------------------------ behind the scene -------------------------
// const user = function(name, email, password){
//     this.name = name;
//     this.email = email;
//     this.password = password;
// }

// user.prototype.encryptPassword = function() {
//     return(`${this.password}#abc`);
// }

// user.prototype.changeName = function() {
//      return `${this.name.toUpperCase()}`
// }


// const Ankit = new user('Pinku', 'Pinki@papa', 'shaktiman')


// console.log(Ankit.encryptPassword());
// console.log(Ankit.changeName());
