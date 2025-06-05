// INHERITANCE


// lets create a class user
// that class is  reponsible for every entry
// that user will either Teacher or Student, sometimes

class user {
    constructor(username){
        this.username = username;
    }

    log(){
        console.log(`user name is ${this.username}`);
        
    }

    static createid(){      //static: it is used to preserve the access and to not shared by any other child class
        return `${this.username}#123`
    }
}

// const Teacher1 = new user("Ankit")
// console.log(Teacher.log());


class Teacher extends user {
    constructor(username, email, password){
        super(username)      // in order to set the value of username by parent/super class
        this.email = email
        this.password = password
    }


    findUser(){
        console.log(`user name is ${this.username}`);
        
    }
}

const matlabi = new Teacher('Xman','xandu.com', '345')
// console.log(matlabi.findUser());
matlabi.findUser()


const olevia = new user("olevia")
// olevia.log()

// console.log( matlabi === olevia );

// console.log(matlabi === Teacher); // false

// console.log(matlabi instanceof Teacher); // true            "INSTANCEOF"

// console.log(matlabi instanceof user)    // true


const Alpana = new Teacher('Alpana', 'drum@rty', 'blue')
console.log(Alpana.createid());     // if we remove STATIC keyword, then it will be accessed

