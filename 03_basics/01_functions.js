function sayMyName(){
    console.log("A");
    console.log("N");
    console.log("K");
    console.log("I");
    console.log("T");
    
}

sayMyName       //reference only
sayMyName()     //calling the function



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
console.log(loginUserMessage("Ankit"));





function loginUserMessage(username){     //predefined parameters
    if(username === undefined){
        console.log("enter username name");
        return
        
    }
    return(`${username} just logged In`);
    
}
console.log(loginUserMessage());