
let myHeros = ["thor","spiderman"]
let heroPower = {
    thor:"hammer",
    spiderman:"sling",


    getSpiderPower:function(){
        console.log(`spider power is ${this.spiderman}`);
    }
}

Object.prototype.salman = function(){
    console.log("salman is present in all object");
}
heroPower.salman()
myHeros.salman()

Array.prototype.heySalman = function (){
    console.log("Hi Salman");
}
myHeros.heySalman()
//heroPower.heySalman()

//inheritance
const User ={
    name:"chai",
    emial : "chai@google.com"
}

const Teacher = {
    makeVideo : true
}
const TeachingSupport = {
    isAvailable:false
}
const TASupport = {
    makeAssignment : 'JS assignment',
    fullTime : true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = User


//modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

let myName = "salman     "
let myChannel = "chai chai or code    "
let anotherUserName = ""
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}
// console.log(myName.truelength());
myChannel.trueLength()

"salman".trueLength()
