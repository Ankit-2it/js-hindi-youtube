const marvel_heros = ["IronMan", "CaptainAmerica", "SpiderMan"]
const dc_heros = ["WonderWoman", "Batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);  // to access Batman


// console.log(marvel_heros + dc_heros);       //string


const heros = marvel_heros.concat(dc_heros)
// console.log(heros);

//SPREAD operation
const allHeros = [...marvel_heros, ...dc_heros]

// console.log(allHeros);



const arr3 = [1,2,3,4, [1,2,3], 5,6,7, [8,9], 6]

const simple_arr3 = arr3.flat(Infinity)

// console.log(arr3);
// console.log(simple_arr3);




// console.log(Array.isArray("Ankit"));
// console.log(Array.from("Ankit"));
// console.log(Array.from({name: "Ankit"}));  //interesting, returns [], empty array
                                            //get confused, kiska array bnae ? (key or value)
                                            //we need to tell first




let rank1 = 435
let rank2 = 354
let rank3 = 543

console.log(Array.of(rank1,rank2,rank3));
