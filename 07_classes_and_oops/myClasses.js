//Es6

// class User{
//     constructor(username , email ,password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
// }

// const chai = new User("chai", "chai@gmai.com", "123")
// console.log(chai.encryptPassword());

//behind the scene

function User(username ,email , password) {

    this.password = password
    this.username = username
    this.email = email

}

User.prototype.encryptPassword = function (){
    return `${this.password}.abc`
}

const Tea = new User("Tea", "Tea@gmai.com", "123")
console.log(Tea.encryptPassword());
console.log(Tea.password);


