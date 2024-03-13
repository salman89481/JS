// class User{
//     constructor (email , password){
//         this.email = email;
//         this.password = password
//     }

//     get email(){
//         return this._email.toUpperCase()
//     }

//     set email(value){
//         this._email = value
//     }
// }

// const salman = new User("salman@gmail.com", "1aaaaC")
//  console.log(salman.email);


// function User (email , password){
//     this._email = email;
//     this._password = password

//     Object.defineProperty(this,'email',{
//         get:function(){
//             return this._email.toUpperCase()
//         },
//         set:function(value){
//             this._email = value
//         }
//     })
// }

// const salman  = new User("salmanAhmad90@gmail.com" , "chai")

// console.log(salman.email);


// object_get_set

const User = {
    _email: 'salman@gmial.com',
    _password: "abc",

    get email (){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea  = Object.create(user)

console.log(tea.email);