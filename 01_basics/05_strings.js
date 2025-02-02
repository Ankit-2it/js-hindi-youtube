// strings 
// ``(back-tics) : interpolation, here we make Placeholders and inject the value

const name = "Ankit"
const age = 23

// console.log(name + age);
// console.log(name + age + "SeiralNO"); 


const gameName = new String('Ankit_Kumar_Prasad')

// console.log(gameName[0])
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(13));
// console.log(gameName.indexOf('P'));


const newString = gameName.substring(3,6)
// console.log(newString);

const oneMore = gameName.slice(-13,8)
// console.log(oneMore);

const varOne = "  2Space  "
// console.log(varOne);
// console.log(varOne.trim());


const url = "https://hitesh.com/hitesh%20choudhary"


console.log(url.replace('%20','__'));

console.log(url.includes('com'));

console.log(url.split('/'));


