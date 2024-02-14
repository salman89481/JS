const promiseOne = new Promise(function(resolve , reject){
    //Do an async task
    //DB calls , cryptography,networking
    setTimeout(function(){
        console.log("Async task is complete");
        resolve();
    },1000)
});

promiseOne.then(function(){
    console.log("Promise Consumed");
})



new Promise(function(resolve ,  reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("async code resolved");
})



const promiseThree = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve({username:"salman",email:"salman94157@example.com"})
    },1000);
});

promiseThree.then(function(user){
    console.log(user);
})




const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
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


