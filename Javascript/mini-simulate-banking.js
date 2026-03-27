// function withDraw(account ,amount){
//     account.money -= amount;
//     console.log("User with Account Name",account.accountName)
//     console.log("Withdraw Amount is " + amount)
//     console.log("Current balance is " + account.money)
// }
//
// function main(){
//     let account = {
//         accountName: "John",
//         money: 10000
//     }
//     // action
//     withDraw(account, 100)
//     console.log(account.money)
// }
//
//
//
// console.log(false && false)

//main();
// void function
// return type function


function greetA(p1){
    console.log(p1)
    greetB(p1)
}
function greetB(p1){
    console.log("in greet B = " + p1)
}

greetA(2);



