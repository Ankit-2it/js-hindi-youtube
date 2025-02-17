// for loop

for (let i = 0; i <= 10; i++) {
    // console.log(`value of i is ${i}`);
    
}


// for loop with conditions

// for (let i = 0; i <= 10; i++) {
//     console.log(`value of i is ${i}`);
//     if(i == 10){
//         console.log("we have come to the end of loop");
        
//     }
// }


// Nested for loop

// for (let i = 1; i <= 10; i++) {
//     console.log(`value of i is ${i}`);

//     for (let j = 1; j <= 10; j++){
//         console.log(i + " * " + j + " = " + i*j);
        
//         if(j == 10){
//             console.log(`we have come to the end of table of ${i}`);
            
//         }
//     }
    
// }



// loop on array 

// const arr1 = ["Iron Man", "Spider Man", "Captain America"]
// console.log(arr1.length);
 
// for (let i = 0; i < arr1.length; i++) {

//     console.log(arr1[i]);
        
// }


// Break and Continue

// for (let m = 0; m <= 20; m=m+2) {
//     console.log(m);
//     if(m == 14){
//         console.log(" 14 is detected, Breaking the program");
//         break
//     }
    
// }


for (let m = 0; m <= 20; m=m+2) {
    if(m == 14){
        console.log(" 14 is detected, Continue without printing");
        continue
    }
    console.log(m);
    
    
}