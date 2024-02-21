// const promiseOne = new Promise(function(resolve , reject){
//     //Do an async task
//     //DB calls , cryptography,networking
//     setTimeout(function(){
//         console.log("Async task is complete");
//         resolve();
//     },1000)
// });

// promiseOne.then(function(){
//     console.log("Promise Consumed");
// })



// new Promise(function(resolve ,  reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     },5000)
// }).then(function(){
//     console.log("async code resolved");
// })



// const promiseThree = new Promise(function(resolve , reject){
//     setTimeout(function(){
//         resolve({username:"salman",email:"salman94157@example.com"})
//     },1000);
// });

// promiseThree.then(function(user){
//     console.log(user);
// })




const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if (!error) {
            resolve({username : "ahmad" , email : "salman8948@gamil.in"});
            
        }else{
            reject("Error : Somehting went wrong");
        }
    },1000);

})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log("The Promise is either resolved or rejected");
})


// const promiseFive =  new Promise(function(resolve , reject){
//     setTimeout(function(){
//         let error = false
//         if (!error){
//             resolve({username : "javascript", password:"abc"})
//         }else{
//             reject("Error :JS went wrong")
//         }
//     },1000)
// })

// async function ConsumePromiseFive(){
//     try{
//         const response = await promiseFive()
//         console.log(response);

//     } catch(error){
//         console.log(error);
//     }
// }

//  ConsumePromiseFive()

// function myFun(result) {
//     console.log(result);
// }

// console.log('Start');
// getData(myFun);
// console.log('End');

// function getData(callback) {
//     setTimeout(function() {
//         callback('Data fetched asynchronously');
//     }, 2000);
// }


// async function getAllUsers(){
    //     try{
    //         const response = await fetch('https://jsonplaceholder.typicode.com/users')
    //         const data  =await response.json();
    //         console.log(data);
    
    //     } catch (error){
        //         console.log("E:", error);
        //     }
        // }

        // getAllUsers();
        
// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response)=>{
//     return response.json()
// }).then((data)=>{
//     console.log(data);
// })
// .catch((error)=> console.log(error))
// .finally()



// function myFun(result) {
//         console.log(result);
//     }
    
//     console.log('Start');
//     getData(myFun);
//     console.log('End');
    
//     function getData(callback) {
//         setTimeout(function() {
//             callback('Data fetched asynchronously');
//         }, 2000);
//     }