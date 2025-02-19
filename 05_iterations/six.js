// const coding = ["js", "ruby", "java", "python", "cpp"]

// let values = coding.forEach( (item) => {
//     // console.log(item);           //undefined
//     return item                     //undefined
// })

// console.log(values);


const myNos = [1,2,3,4,5,6,7,8,9,10]

// let newNos = myNos.filter( (item) => item > 7   //without {} direct access
// )

// let newNos = myNos.filter( (item) => {
//     return item > 7
// })

// console.log(newNos);
// o/p: [ 8, 9, 10 ]



// const newNos = []
                                        //using forEach "jabarjasti" instead of filter
// myNos.forEach( (num) => {
//     if(num>7){
//         newNos.push(num)
//     }
// })
// console.log(newNos);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// let userBooks = books.filter( (bk) => bk.genre === "Fiction")
// console.log(userBooks);

let userBooks2 = books.filter( (bk) => {
    return bk.genre === "Non-Fiction" && bk.publish >= 1990
})
console.log(userBooks2);
