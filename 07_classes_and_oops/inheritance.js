class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username ,email,password){
        super(username)
        this.email = email
        this.password =password
    }

    addCourse(){
        console.log(`A new Course is added by ${this.username}`);
    }
}

const chai = new Teacher("salman" ,"salman@gmail.com","16162.3")
chai.addCourse()
chai.logMe()

//chai === teacher false aaega because it makes instance

console.log(chai instanceof Teacher);
console.log(Teacher instanceof User);