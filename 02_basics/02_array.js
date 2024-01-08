const marvel_heros= ["ironman", "hulk", "spiderman"]
const dc_heros = ["superman","flash" , "batman"]

//marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);
// const allheros = marvel_heros.concat(dc_heros)
// console.log(allheros);

const new_allheros = [...marvel_heros ,...dc_heros]
//console.log(new_allheros);

const another_array = [1,2,[2,3],4,5,3,[4,5,[4,8,9]]]
const  real_another_array = another_array.flat(Infinity)
//console.log(real_another_array);


// console.log(Array.isArray("Salman"));
// console.log(Array.from("Salman"));
// console.log(Array.from({name:"hitesh"}));//intresting case

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

