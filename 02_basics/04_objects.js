const tinderUser = new Object()

const tinderUser2 = {}

// console.log(tinderUser);        //object
// console.log(tinderUser2);       //object

tinderUser.name = "Ankit";
tinderUser.age = 22;
tinderUser.email = "xuv@bazaz.com"

// console.log(tinderUser);

const regularUser = {
    isWorking : false,
    fullName : {
        employeeName : {
            firstName : "Ankit",
            middleName : "Kumar",
            lastName : "Prasad"
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullName.employeeName.lastName);

// console.log(regularUser.fullName?.employeeName.lastName);    // ? after full name to check the property exists or not 
                                                                // generally use in API and apply if/else condition


const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

// const obj3 = {obj1, obj2}   //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

const obj3 = Object.assign(obj1, obj2)      //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
                        //(target = obj1, source = obj2)     //here all the objects are storing in obj1
const obj4 = Object.assign({}, obj1, obj2)   //here all the objects are storing in a unique {}
// console.log(obj3);


// Spread
const obj5 = {...obj1, ...obj2}     //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// console.log(obj5);

// Array of Objects :
const users = [
    {

    },
    {

    },
    {

    }

]

users[1].email = "xray.com"
// console.log(users);

// console.log(Object.keys(tinderUser));  //return Keys in Array
// console.log(Object.values(tinderUser).length);     ////return vlaues in Array

// console.log(Object.entries(tinderUser))     //[ [ 'name', 'Ankit' ], [ 'age', 22 ], [ 'email', 'xuv@bazaz.com' ] ]


// console.log(tinderUser.hasOwnProperty("email"));  //to check before looping a big array of objects


//+++++++++++++++++++++++++++++ Object destructure +++++++++++++++++++++++++++++++++++

const course = {
    courseName : "JS in Hindi",
    price : "free",
    courseInstuctor : "Hitesh Choudhary"
}

// console.log(course.courseInstuctor);

const {courseInstuctor: instruc} = course    //destructuring the property courseInstuctor from course object and assigning it a new name

console.log(instruc);


//++++++++++++++++++++++++++ API +++++++++++++++++++++++++++++++

// all the data comes from a storage in JSON format

{
    "name" : "Ankit",                       //format like object
    "age" : 22,
    "email" : "hh@jk.com",
    "isWorking" : true
}

// API : https://api.github.com/users/Ankit-2it 

// tools to simplify JSON text : json formattor

// random api  :  random user me api

// API can either be in Array or Object