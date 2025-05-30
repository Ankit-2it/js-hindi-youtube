const user = function(name, email, password){
    this.name = name;
    this.email = email;
    this.password = password;
}

user.prototype.encryptPassword = () => {
    return(`${this.password}#abc`);
}

user.prototype.changeName = () => {
     return `${this.name.toUpperCase()}`
}


const Ankit = new user('Pinku', 'Pinki@papa', 'shaktiman')


// console.log(Ankit.encryptPassword());
console.log(Ankit.changeName());
