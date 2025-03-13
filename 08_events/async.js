// async : Asynchronos

// --> promise/ async-await concepts

// JavaScript :    (Default)
//     --> Synchronos (firstly compltes one task then go to nxt)
//     --> Single Threaded (everything executes on single thread, one single branch, not multiple)


//     always available in any run-time environment  (web/ node)
//     single JS environment is not available easily


// Execution Context : 
//     execute one line of code at a time
//     |
//     |----------> console.log('1');
//     |
//     |
//     |----------> console.log('2');  (nxt instruction waits for first to execute completly)
//     |
//     |
//     \/  [call stack] | [memory heap]







// Blocking Code               VS                  Non Blocking Code
// 'Synchronos'                                    'Asynchronos'
//     |                                               |
//     |                                               |
// (block the flow of program)                         |
//     |                                               |
//     |                                       (does not block the execution)
// "read file synchro"                                 |
//                                                     |
//                                                 "read file Asynchro"




// ----------------------------------------------JS ENGINE Working-----------------------------------------------

//  JS ENGINE -------- i) Memory Heap          ii) Call stack (global execution, function, function)
//     |
//     |
// is not available singlely, as Synchronos
//     |
//     |
//     |
// to make it Asynchronos it is available with ENVIRONMENT(web API/node API)
//     |
//     |
//     |(if the  'ii)Call Stack' has some func. that says ki mere kaam ko kuch interval baad kr dena)
//     |               <that func. goes like a call and come back after the interval>
//     |(Node environment waits for that interval and again sends that func. inside the 'ii)Call Stack' to get exected)
//     |
// ENVIRONMENT has "register callback"
//                     |
//                     |___> register that hold that kind of instructions (setTimeout, setInterval,...)


// "register callback" 
//     |
//     |
//   connected to TASK-QUEUE (hold that instructions in queue format)
//     |
//     |
// sends the instruction again in 'ii)Call Stack'


// example: 
//          print 1
//          0 sec, print 2
//          print 3
// output: 1, 3, 2
//                 [as the 1 printed, a call passes and the load goes to the ENVIRONMENT, before it comes back 3 get printed]


// Fetch()  :   new api introduced in environment
//     |
//     |
// it has the concept of PROMISE
// it has same TASK-QUEUE (only difference - Higher Priority concept)