class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username : ${this.username}`);
    }
    static createID(){
        return '123'
    }
}

const salman = new User("salman")
//console.log(salman.createID());

class Teacher extends User{
    constructor(username ,email){
        super(username)
        this.email = email
    }
}
const Iphone = new Teacher("IPhone","i@phone.com")
Iphone.logMe();
Iphone.createID();
