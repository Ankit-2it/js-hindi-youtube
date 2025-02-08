// singleton
// Object.create

// Object literals -> how to define objects

const mySym = Symbol("key1")   //interview que : define a Symbol and add it in the object and access it
const mySym2 = Symbol("key1") 

const JsUser = {
    name : "Ankit",
    gender : "Male",
    "curret age" : 23,
    [mySym] : "mykey1",     //[Symbol(key1)]: 'mykey1'
    email : "xyz@nano.com",
    mySym2 : "2mykey",      //mySym2: '2mykey', Simple as other strings
    isMarried : false,
    workout : ["Monday", "Wednesday"]
}

// console.log(JsUser.name);
// console.log(JsUser["email"]);
// console.log(JsUser["curret age"]);
//  console.log(JsUser[mySym]);     // datatype : Symbol



JsUser.salary = 600000
// console.log(JsUser);

// to freeze the object, so no further changes can be done
// Object.freeze(JsUser)

JsUser.salary = 700000
// console.log(JsUser);



JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingtwo = function(){
    console.log(`Hello JS User ${this.name}`);         //this keyword refer the same object
}


console.log(JsUser.greeting);       //O/P: [Function (anonymous)]
                                    // function is referred but not executed
console.log(JsUser.greeting());


console.log(JsUser.greetingtwo());