// for of loop
// for (const element of object) {
    
// }

// specially designed for:
//  ["", "", ""]
//  [{}, {}, {}]

const arr2 = [2,4,6,8,10]

for (const i of arr2) {
    // console.log(i);
    
}



//accessing ele of string

let name = "Ankit Prasad"

for (const ele of name) {
    // console.log(ele);
    
}



// Maps : key value pair

let map = new Map()
map.set('IN', 'India')
map.set('UK', 'United Kingdom')
map.set('ENG', 'England')
map.set('AUS', 'Australia')

// console.log(map);
// O/P:
// Map(4) {
//     'IN' => 'India',
//     'UK' => 'United Kingdom',
//     'ENG' => 'England',
//     'AUS' => 'Australia'
//   }



// for of loop on MAP

for (const key of map) {
    // console.log(key);
    
}
// o/p :
// [ 'IN', 'India' ]
// [ 'UK', 'United Kingdom' ]
// [ 'ENG', 'England' ]
// [ 'AUS', 'Australia' ]


for (const [key, value] of map) {           //destructuring of array
    // console.log(key, " :- ", value);
    
}
// o/p:
// IN  :-  India
// UK  :-  United Kingdom
// ENG  :-  England
// AUS  :-  Australia



// for of loop on OBJECT

const obj1 = {
    name : "ankit",
    age: 22,
    gender: "M"
}

for (const [key, value] of obj1) {
    // console.log(key, ":-", value);
    
}
// o/p:
// TypeError: obj1 is not iterable