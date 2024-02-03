//array

const myArr = [0,1,2,3,4,5]

//console.log(myArr[0]);

//shallow copy


myArr.push(6)
myArr.push(7)
myArr.pop()
// myArr.unshift(98)
// myArr.shift()
//console.log(myArr);

//console.log(myArr.includes(3));
const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

//slice, splice

 //console.log("A",myArr);
//in below example slice method extract element from index 1-3(exclusively ) means 3rd index is not involved only includes 1-2 index values .
// slice doesn't modify the main string. main string remains as it is.
const myn1 = myArr.slice(1,3)

// console.log(myn1);
// console.log("B",myArr);
//This method removes elements starting from index 1 and removes 3 elements from the array myArr. 
//The removed elements are returned as a new array.
const myn2 = myArr.splice(1,3)
// console.log(myn2);

// console.log("C",myArr);

let numbers = [1, 2, 3, 4, 5];
//The choice between for and forEach depends on the specific requirements of your task.
//forEach is often preferred when you want a concise and expressive way to iterate over the elements of an array
// and perform an action for each element.
numbers.forEach((number, index) => {
  console.log(`Element at index ${index}: ${number}`);
});
