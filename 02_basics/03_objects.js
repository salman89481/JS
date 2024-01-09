//singleton

//object literals

const mySym = Symbol("key1")

const JsUser ={
    name: "Salman",
    age: 19,
    [mySym]:"myKey1",
    location:"Lucknow ",
    email: "salman@google.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]

}
// console.log(JsUser.email);
// console.log(JsUser["location"]);
// console.log(JsUser[mySym]);

JsUser.email = "salman@barclays.com"
//Object.freeze(JsUser)
JsUser.email = "salman8948@google.com"
//console.log(JsUser);

JsUser.greeting = function () {

    console.log("Hello JS User");

}
console.log(JsUser.greeting());

JsUser.greeting2 = function () {
    console.log(`Hello Js User ${this.name}`);
}

console.log(JsUser.greeting2());