const marvel_heros= ["ironman", "hulk", "spiderman"]
const dc_heros = ["superman","flash" , "batman"]

marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);
const allheros = marvel_heros.concat(dc_heros)
//console.log(allheros);

const new_allheros = [...marvel_heros ,...dc_heros]
//console.log(new_allheros);

const another_array = [1,2,[2,3],4,5,3,[4,5,[4,8,9]]]
//The flat() method is used to flatten nested arrays, and the argument Infinity ensures that all levels of nesting are flattened
const  real_another_array = another_array.flat(Infinity)
//console.log(real_another_array);


console.log(Array.isArray("Salman"));
console.log(Array.isArray(real_another_array));
//The Array.from() method in JavaScript is used to create a new shallow-copied array from an iterable object or an array-like object. When you use it with a string, 
//it creates an array where each character of the string becomes an element in the array. 
console.log(Array.from("Salman"));
console.log(Array.from({name:"hitesh"}));//intresting case
// The output [] (an empty array) is produced because the object {name: "hitesh"} does not have the 
// necessary properties (like length and numeric indices) expected by Array.from().

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

