// global variable
let accountBalance = 0

function deposit(amount) {
    // console.log("deposit", amount);

    if(amount < 0){
        console.log(`Error deposited: you can't deposit the negative balance ${amount}, ${amount}`);
        console.log("Error deposited: you can't deposit the negative balance" + amount + ", " + amount);
        return;
    }

    accountBalance += amount;
    console.log(`Successfully deposited: ${amount}, Current balance: ${accountBalance}`);
}

function withdraw(amount) {
    //console.log("withdraw", amount);
    if(amount <= 0){
        console.log(`Error withdraw: you can't withdraw ${amount}`);
        return;
    }

    if (amount > accountBalance){
        console.log(`Error withdraw: your current balance is not enough money ${accountBalance}`);
        return;
    }

    accountBalance -= amount;
    console.log(`Successfully withdraw: ${amount}, Current balance: ${accountBalance}`);
}

function processBatchTransactions(transactions) {

    for (let i = 0; i<transactions.length; i++){
        // console.log(`Transaction ${i} + ${transactions[i].type}`);
        if(transactions.type === "deposit"){
            // action
            deposit(transactions[i].amount)
        }
        else if(transactions[i].type === "withdraw"){
            // action
            withdraw(transactions[i].amount)
        }
    }

    console.log(`Final Balance ${accountBalance}`);
}

const inputTransactions = [
    { type: "deposit", amount: 500 },
    { type: "withdraw", amount: 150 },
    { type: "withdraw", amount: 400 },
    { type: "deposit", amount: 50 }
];

processBatchTransactions(inputTransactions);