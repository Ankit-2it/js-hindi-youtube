//Arrays

//Object in JS 
// it shares the SHALLOW copy and not the DEEP copy

// SHALLOW : share the same reference
// DEEP : do not share the same reference

const arr1 = [2,4,6,8, true, "Ankit"]
// console.log(arr1);


const arr2 = new Array(11,22,33,44,55)
// console.log(arr2[4]);

//array has prototypes defined

//array methods:

// arr2.push(99)
// console.log(arr2 );
// arr2.pop()
// console.log(arr2 );

// arr2.unshift(0)
// console.log(arr2 );

// arr2.shift()
// console.log(arr2 );


//methods answer in t/f:

// console.log( arr1.includes("Ankit"));
// console.log( arr1.indexOf("Ankit"));

const nyaBabu = arr1.join()

// console.log(arr1);
// console.log(nyaBabu);
// console.log(typeof(nyaBabu));     //string type ?



// Slice / Splice methods

console.log("A ", arr2);
console.log(arr2.slice(1,4));   //gives the copy of original array & 
                                //exclude last value (4th index)

console.log("B ", arr2);
console.log(arr2.splice(1,4));  //affects the original array & 
                                //exclude last value (4th index)

console.log("C ", arr2);        //O/P:  C  [ 11 ]

