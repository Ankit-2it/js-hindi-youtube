// Reduce method (for array)

const myNums = [1, 2, 3, 4]

// accumulator : that holds the added vlaue for each iteration
// currentValue : each current element of the array

// const myTotal = myNums.reduce( (accumulator, currentValue) => {
//     console.log(`accumulator : ${accumulator} and currentValue : ${currentValue}`);
//     return accumulator + currentValue
// }, 0)   // this 0 gives the starting value to accumulator for once at the starting only

// console.log(myTotal);



// const myTotal = myNums.reduce( (acc, curr) => acc + curr )
// console.log(myTotal);



const shoppingCart = [
    {
        productName: "Phone",
        price: 23000
    },
    {
        productName: "Laptop",
        price: 123000
    },
    {
        productName: "Guitar",
        price: 33000
    },
]

const priceToPay = shoppingCart.reduce( (accu, item) => {
    return accu + item.price
},0)

console.log(priceToPay);
