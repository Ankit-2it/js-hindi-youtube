// #Promises

// Consuming promises: using pre-created promises
//              fetch('https://something.com').then().catch().finally()


// Creating promises:

// const promiseOne = new Promise(function(resolve, reject){})      //instance(new) is same as class

// const promiseOne = new Promise(function(resolve, reject){
//     //Do an async task (DB calls, cryptography, network)

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
//     console.log(myuserid);      //to access that value in another ".then" is applied, which hold that vlaue
    
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

// fetch was available in Browser earlie Later it was added in node also(2022)

// we have seen in the picture that 
// in the CALL STACK some func. sent special request to web api ka SetTimeout ko
// that setTimeout register a callback after some interval then it(callback) goes to TaskQueue
// from there it again added to CALL STACK

// but here fetch(), [wheteher from Web/Node] sends a special callback in queue called: Micro Task Queue/ Priority Queue/ Micro Queue
// the callback from FETCH() is prioratised than SetTimeout, it would be executed first (callback from fetch())


// From Fetch-data-access image:-

// whenever we write: response = fetch('hjklhjk')
                                //     /      \
                                //    /        \_____________________ Web Browser/node
                                // __/                                         \
// store variables to store coming data                                         \
// 1. Data:    {store the result whether form response/reject}                 network request
// 2. OnFulfield[] {response}                                                      /   \
// 3. OnRejection[] {reject}                                                      /     \
//                                                                             response  \
//                                                                                      reject

// whenever we write: response = fetch('hjklhjk'), two task start to perform 
// one is variable creation: for stoing the values
// other is on web/node : network request (whick will either response or reject and store in OnFulfield[] or OnRejection[])
// any of the value form response or reject will store in [Data:_____] as OnFulfield[] or OnRejection[] has func. which is responsible to fulfil the DATA:
// once Data:___ is fulfiled, response is available in Global Memory and executed