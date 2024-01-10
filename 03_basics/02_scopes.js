let a = 10
const b =20
var c = 30
//var scope follow nhi karta hai isliye isko use b nhi kra jata hai

function addOne(num) {
    return num+1
    
}

//function defition ke upr bhi isko rkh skte h it will work
addOne(5)


//addtwo wala bhi function hai but we called it as expression
const addTwo = function(num){
    return num+2
}
//in this if we put above definition of funtion then error occur annot acces 'addTwo' before initialization
addTwo(9)


//hoisting