const user ={
    username :"Hitesh",
    loginCount : 9,
    signedIn:true,

    getUserDetails: function(){
        console.log("Got User Details");
    }
}

UserOne = user
UserOne.getUserDetails()

function User(username , loginCount , signedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.signedIn = signedIn;

    this.getUserDetails=function(){
        console.log(`Welcome ${this.username}`);
    } 
    return this
}

userOne = new User("salman","8",true)
userTwo = new User("ahmad","9",true)

userOne.getUserDetails()
userTwo.getUserDetails()
console.log(userOne.constructor)



