// map method

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNum = myNumbers.map((num) => num * 10)
// console.log(newNum);


// const newNum = myNumbers.forEach((num) => {
//     return(num);
    
// })
// console.log(newNum);


const newNum = myNumbers
               .map((num) => num * 10)          //first method returns [10, 20, 30, 40,  50, 60, 70, 80, 90, 100]
               .map((num) => num + 1)           //second method returns [11, 21, 31, 41,  51, 61, 71, 81, 91, 101]
               .filter((num) => num >= 60)      //final method returns [ 61, 71, 81, 91, 101 ]
               
console.log(newNum);
