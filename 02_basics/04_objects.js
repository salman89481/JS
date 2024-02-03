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
            firstname:"Salman",
            lastname:"Ahmad"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

//optional chaining ? API response etc next lectures discussion

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
//output hai console.log(obj3) ka{
//     obj1: {1: "a", 2: "b"},
//     obj2: {3: "c", 4: "d"}
//   }
//const obj3 = {obj1 , obj2} same array wala issue hoga array ke andr array tha jaise 

//The Object.assign() method copies the properties from obj2 to obj1. However,
// it's important to note that Object.assign() modifies the target object (obj1) in place and returns the modified object.
//const obj3 = Object.assign(obj1 , obj2)
// in above obj1 is targeted object and obj 2 is source object 


// If you want to create a new object without modifying any of the source objects, 
// you can create an empty object as the target and then use Object.assign()

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
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

//course.courseInstructor

//const {courseInstructor} = course
//if this name course instructor is too big then we can change the name accordingly
const {courseInstructor: instructor} = course
console.log(instructor);
console.log(course);


