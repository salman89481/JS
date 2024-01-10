function sayMyNmae() {
    console.log("S");
    console.log("A");
    console.log("L");
    console.log("M");
    console.log("A");
    console.log("N");
}

//sayMyNmae()

function loginUserMessage(username) {
    if (!username){
        console.log("Please enter the Username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Salman"));


function addCartProductPrice(...price) {
    return price
}

pricerArray = addCartProductPrice(200,300,100,600)

console.log(pricerArray);