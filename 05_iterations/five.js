// forEach loop

const coding = ['js', 'ruby', 'java', 'python', 'cpp']

// coding.forEach( function (ele) {    // callback func
    // console.log(ele);
    
// })


// coding.forEach( (item) => {         // arrow func
//     console.log(item);
    
// })



// function printMe(item){
//     console.log(item);   
// }
// coding.forEach(printMe)    //passing the predefined func. as item



// coding.forEach( (ele, index, arr) => {    //other parameters available
//     console.log(ele, index, arr);
// } )


const myArray = [
    {
        playerName: "Ankit",
        score: 150
    },
    {
        playerName: "Mohak",
        score: 197
    },
    {
        playerName: "Suresh",
        score: 678
    }
]

myArray.forEach((item) => {
    console.log(item.playerName);
    console.log(item["score"]);
})