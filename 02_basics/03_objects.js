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
console.log(JsUser.email);
//Object.freeze(JsUser)
JsUser.email = "salman8948@google.com"
console.log(JsUser);

JsUser.greeting = function () {

    console.log("Hello JS User");

}
//console.log(JsUser.greeting()): This line attempts to call the greeting function and log the result
//. However, the greeting function does not have a return statement, so it implicitly returns undefined.
console.log(JsUser.greeting());

JsUser.greeting2 = function () {
    //The greeting2 function uses this.name to reference the name property within the object.
    console.log(`Hello Js User ${this.name}`);
}

// console.log(JsUser.greeting2());