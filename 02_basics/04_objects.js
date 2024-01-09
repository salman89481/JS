//const tinderUser = new Object() //singleton object

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "ilham"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firtname:"Salman",
            lastname:"Ahmad"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firtname);

//optional haining ? API response etc next lectures discussion

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
//const obj3 = {obj1 , obj2} same array wala issue hoga array ke andr array tha jaise 

//const obj3 = Object.assign(obj1 , obj2)
//const obj3 = Object.assign({} , obj1 , obj2)

const obj3 = {...obj1, ...obj2}
//console.log(obj3);

const user = [
    {
        id:1,
        email:"sa@gmail.com"
    },
    {
        id:1,
        email:"sa@hmail.com"
    }
]

user[0].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

