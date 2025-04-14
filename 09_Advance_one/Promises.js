// #Promises

// Consuming promises: using pre-created promises
//              fetch('https://something.com').then().catch().finally()


// Creating promises:

// const promiseOne = new Promise(function(resolve, reject){})      //instance(new) is same as class

// const promiseOne = new Promise(function(resolve, reject){
//     //Do an async tast (DB calls, cryptography, network)

//     setTimeout(function(){
//         console.log('Async task is completed');
//         resolve() //we need to call resolve() in order to execute .then wala function
//     }, 1000)
// })

// // promiseOne.then(function(){})  is connected to 'resolve' directly
// promiseOne.then(function(){
//     console.log("Promise consumed!");
    
// })


// we can get the same task in other way
// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('Async 2 is executed');
//         resolve()
//     }, 1000)
    
// }).then(function(){
//     console.log('Async 2 is resolved!');
    
// })


// data consumption in .then (resolve) [how to pass some data in .then func.]
// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "Ankit", email: "aa@xyz.com"})   //passing the object
//     }, 1000)
// })

// promiseThree.then(function(user){       // passing user = obj
//     console.log(user);
    
// })



// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function() {
//         // const error = true
//         const error = false
//         if(!error){
//             resolve({userid: "A_nkit", password: "1234"})
            
//         }else{
//             reject('Error: Something went wrong!')            
//         }
//     }, 1000)
// })

// promiseFour
//  .then((user) => {
//     console.log(user);
//     // console.log(user.userid);

//     return(user.userid);
    
// }).then((myuserid) => {         //if returning the value in 1st then, 
//     console.log(myuserid);      //to access that value another ".then" is applied, which hold that vlaue
    
// })
// .catch((err) => {
//     console.log(err);
    
// })
// .finally(() => console.log('The Promise is either resolved or rejected!')
// )



// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function() {
//         const error = true
//         // const error = false
//         if(!error){
//             resolve({userid: "JavaScript", password: "A#245"})
            
//         }else{
//             reject('Error: JS not working!')            
//         }
//     }, 1000)
// })

// async function consumePromiseFive(){            //handling the Promise with 'async | await'
//     try {                                       //applying the "try | catch" : to handle error/.catch
//         const response = await promiseFive      // promiseFive is an object, so it would not be called as : await promiseFive()  [brackets() will not be used]
//         console.log(response);
        
//     } catch (error) {
//         console.log(error);
        
//     }
    
// }
// consumePromiseFive()



// async function getAllUsers() {
    
//     //if we dont use "try | catch", output: Promise { <pending> }
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts')
//         // console.log(response);
        
//         const data = await response.json()  //converting response into JSON is time taking so is a await function
//         console.log(data);
//     } catch (error) {
//         console.log('Er: ', error);
        
//     }
// }

// getAllUsers()



// doing same with .then()|.catch()
fetch('https://jsonplaceholder.typicode.com/posts')
.then((response) => {
    return response.json()                              //we dont need to write await, try, catch, etx
})
.then((data) => {
    console.log(data)
})
.catch((error) => console.log(error)
)