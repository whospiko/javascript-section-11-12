let accountBalance = 0;
let transectionCount = 0;

function deposit(amount) {
    // TODO: check amount to be positive
    // TODO: if not then show You must deposit an amount greater than $0.
}

function withdraw(amount) {
    // TODO: check when amount is not grater then or equal 0 then show Amount Must be greater that $0
    // TODO: check when balance is not enough money then show you have only ....
    // TODO: then the withdraw success
}


function processTransactions(transactions) {
    // TODO: do every transaction operator. In case the type of the transections is not match with the condition
    // withdraw or deposit then show Unknow transaction type
}

console.log("Welcome to the Banking");
console.log("Current balance: " + accountBalance);

const pendingTransactions = [
    { type: "deposit", amount: 1000 },
    { type: "withdraw", amount: 200 },
    { type: "withdraw", amount: 900 },
    { type: "deposit", amount: 50 },
    { type: "payment", amount: 100 }
];


processTransactions(pendingTransactions);

console.log("Total Transactions: " + transectionCount);
console.log("Final Balance: " + accountBalance);


