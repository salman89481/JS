// let myDate = new Date()
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(typeof myDate);

//let myCreatedDate = new Date(2023,0,23)
let myCreatedDate = new Date("01-14-2024")
console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
newDate.toLocaleString('default',{
    weekday:"long"
})
console.log(newDate);