
// JS Execution Context:
//    i) Global execution context
//   ii) Function execution context 
//  iii) Eval execution context


// Code executes in two phases:
//  i) Memeory creation phasese : only memory allocation
// ii) execution phase : only execution 

let var1 = 5
let var2 = 10
function addNo(no1, no2){
    return no1+no2
}
let result1 = addNo(var1, var2)
let result2 = addNo(2,6)


// 1) Global execution context:
//     this is defined globaly for window

// 2) Function execution context :

// var1=undefined
// var2=undefined
// addNo=defined
// result1=undefined
// result2=undefined

// 3) Eval execution context:
// var1=5
// var2=10
// addNo -------------> creates new execution context for function only [new variable environment + execution thread]
// result1=15                                                              |
// result2=6                                                               |
//                                                                         |
//                                                                         ------>  Memory phase for:    
// addNo is called for 2 times (result1, result2)                          |
// so two times whole repetation will be done                              |    function addNo(no1, no2){
//                                                                         |       let total = no1+no2
//                                                                         |       return total
//                                                                         |   }
//                                                                         |
//                                                                         |   var1=undefined
//                                                                         |   var2=undefined
//                                                                         |   total=undefined
//                                                                         |
//                                            execution phase <-------------
//                                            var1=5
//                                            var2=10
//                                            total=15