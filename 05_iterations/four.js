// for in loop 
// for (const key in object) {
    
// }

const myObj = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObj) {
    // console.log(key);           
    
}
// o/p:

// js
// cpp
// rb
// swift

for (const key in myObj) {
    // console.log(`${key} is shortcut for ${myObj[key]}`);
    
}


// forin loop in array

const arr1 = ['js', 'rb', 'py', 'java', 'cpp']
for (const key in arr1) {
    // console.log(key);
}
// o/p:
// 0
// 1
// 2            // index nos are key vlaue for elements
// 3
// 4




// forin loop in Map

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
    
}

// o/p:  nothing prints as non-iterable