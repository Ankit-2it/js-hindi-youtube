
// const name = "Ankit"

// console.log(name.length);   // 5

// // want to create a Prototype which gives the exact length 
// const name2 = "Malhotra    "
// console.log(name2.actuallength);    //want this: there should be a prototype available which calculates the actual length of every value
// console.log(name2.length);
// console.log(name2.trim().length);

//-----------------------------------------------------------------------------------------------------------------------------------------

let myHeros = ["ironman", "spiderman"]

let heroPower = {
    ironman: "iron_suit",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`the power of Spiderman is ${this.spiderman}`);
    }
}
// heroPower.getSpiderPower() //this shows the power statement

Object.prototype.ankit = function(){
    console.log("Ankit is present in all the objects");
    
}

// myHeros.ankit()     //checking the prototype is present in all the objects
// heroPower.ankit()

//assigning the power only to array will not give to every array:
Array.prototype.arr_power = function(){
    console.log('Array ka power available hai');
    
}
// myHeros.arr_power()
// heroPower.arr_power()   //TypeError: 

//INHERITANCE

const user = {
    name: "Ankit",
    email: "bmw@chull.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment : "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport  //inheriting the property of parent class[TeachingSupport]
}

Teacher.__proto__= user  //old syntax

//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)     //inheriting property of Teacher into TeachingSupport

let anotherusername = "checking    "
 String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
 }

 anotherusername.trueLength()
 "AnkitKumar".trueLength()
 "ice ".trueLength()