function sayMyName(){
    console.log("A");
    console.log("N");
    console.log("K");
    console.log("I");
    console.log("T");
    
}

// sayMyName       //reference only
// sayMyName()     //calling the function



// function addTwoNos(no1, no2){      //we don't need to define data type of no2/no1 in JS
//     console.log(no1 + no2);
    
// }
// addTwoNos(2,7)



// function addTwoNos(no1, no2){      //we don't need to define data type of no2/no1 in JS
    
//     console.log(no1 + no2);
    
// }
// addTwoNos(2,7)




function addTwoNos(no1, no2){      //we don't need to define data type of no2/no1 in JS
    
    let result = no1 + no2;
    return result

    // return no1 + no2;

    console.log("Ankit");       // anything written after return statement is never considered
    
}
const result = addTwoNos(2,7)
// console.log(result);


function loginUserMessage(username){
    return(`${username} just logged In`);
    
}
// console.log(loginUserMessage("Ankit"));





function loginUserMessage(username){     //predefined parameters
    if(username === undefined){
        console.log("enter username name");
        return
        
    }
    return(`${username} just logged In`);
    
}
// console.log(loginUserMessage());


// ++++++++++++++++++++++++++ function 2.0 +++++++++++++++++++++++++++++

// function addCartValue(one, two, three){
//     return (one, two, three)
// }
// console.log(addCartValue(200,300,400));    // O/P: 400



// function addCartValue(...one){  // (...one) -> Rest Operator
//     return one
// }
// console.log(addCartValue(200,300,400,80000));    //[ 200, 300, 400, 8000]



function addCartValue(val1, val2, ...one){  // val1=200, val2=300
    return one
    return val2   // 300

}
// console.log(addCartValue(200,300,400,80000));   //[ 400, 80000 ]


//Accessing obj using function

const user1 = {
    userName: "Ankit",
    price: 256
}

function details(anyObject){                            
    console.log(`userName is ${anyObject.userName}`)
    console.log(`price is ${anyObject.price}`)
}

// details(user1)           //passing obj name as argument in function

// details({                   //passing whole new obj as argument in function
//     userName: "Mohit",
//     price: 316
// })



// Passing Array as argument in function
const newArray = [212, 342, 89, 908, 676]

function printSecondValue(getArray){
    return getArray[4]
}
console.log(printSecondValue(newArray));

console.log(printSecondValue(["one", "two", "three", "four", "fifth"]));
              //passing whole new ARRAY as argument in function
    

