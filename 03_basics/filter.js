const mynums =[1,2,3,4,5]
// const newNums = mynums.filter((num)=> num>4)
// console.log(newNums);

// filter will not work if we open scope and didn't return 
//explaining below

// const newNums = mynums.filter((nums)=>{
//     return nums>4
// })


// if you wanna do same thing from FOrEach then this is the syntax

const  newNums =[]

mynums.forEach((num)=>{
    if (num>4) {
        newNums.push(num)
    }
})

console.log(newNums);

let arr =[1,2,3,4,5]
console.log(arr);
arr.forEach(function(num){
    console.log(num);
});


//maps and chaining

const myNumber= [1,2,34,5,6,7,9]
const newNumber = myNumber
.map((num) => num+1)
.map((num) => num+1)
.map((num) => num+1)
.filter((num) => num>=5)


console.log(newNumber);


//reduce 

const myArr = [1,2,3,4]

const myTotal = myArr.reduce(function (accumulator , currentValue) {
    console.log(`accumulator: ${accumulator} and currentvalue ${currentValue}`);
    return accumulator+currentValue
},0)
console.log(myTotal);



//shopping cart example

const shoppingCart =[
    {
        itemName: "laptop",
        price:29999
    },
    {
        kitbag:"Adidas",
        price:18000
    },

    {
        underwear:"Adidas",
        price:1800
    }
]

const priceToPay = shoppingCart.reduce((accumulator , item) =>accumulator+item.price , 0)
console.log(priceToPay);