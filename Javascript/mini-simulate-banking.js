function withDraw(account ,amount){
    account.money -= amount;
    console.log("User with Account Name",account.accountName)
    console.log("Withdraw Amount is " + amount)
    console.log("Current balance is " + account.money)
}

function main(){
    let account = {
        accountName: "John",
        money: 10000
    }
    // action
    withDraw(account, 100)
    console.log(account.money)
}

main();