function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log(this.username);
    console.log("called");
}

function createUser(username,email,password){
    SetUsername.call(this,username)
    this.email = email
    this.password = password
}

const chai = new createUser("chai","chai@gmial.com","11233")
console.log(chai);