
//Date is an Object in JS
//JS stores dates in no of miliseconds since Jan 1, 1970
const myDate = new Date()

// console.log(myDate);
//2025-02-05T09:26:48.666Z

//We can use various methods to convert this date into more reliable value
// console.log(myDate.toString());
// //Wed Feb 05 2025 09:27:45 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toDateString());
// // Wed Feb 05 2025

// console.log(myDate.toISOString());
// // 2025-02-05T09:31:25.654Z

// console.log(myDate.toJSON());
// // 2025-02-05T09:31:25.654Z

// console.log(myDate.toLocaleDateString());
// // 2/5/2025

// console.log(myDate.toLocaleString());
// 2/5/2025, 9:37:34 AM


// let myCreatedDate = new Date()   //specifies the current date
// let myCreatedDate = new Date(2025, 0, 15)  //for particular date
// let myCreatedDate = new Date(2025, 0, 15, 7, 8)  //for particular date with time particularly

// let myCreatedDate = new Date("2025-02-15")   //YYYY-MM-DD
let myCreatedDate = new Date("02-13-2025")      //MM-DD-YYYY  (INDIAN)
// console.log(myCreatedDate);
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);                   //gives the current time value in Millisecond
// console.log(myCreatedDate.getTime());       //converting the particular time into millisecond

// console.log(Date.now()/1000);    //converting the current time value in seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})