//if we do console.log in browser then windows is global object ,but we are working on a node environment here that's the reason here if we do console.log(this); then current context will be reffered .
//outside scope {}empty object will be output 

//console.log(this);


// function chai() {
//     let username = "hitesh"
//     console.log(this);
// }

// chai()


// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }


// const chai = () =>{
//     let username ="hitesh"
//     console.log(this);

// }

// chai()

// const addTwo = (num1,num2) =>{
//     return num1+num2
// }
// console.log(addTwo(3,4));


//implicit return 

// const addtwo = (num1,num2)=>num1+num2

const addtwo = (num1,num2)=>({username:"salman"})

console.log(addtwo(3,4));

