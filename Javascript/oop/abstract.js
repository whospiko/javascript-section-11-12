class Payment {
    // abstract method
    process() {
        throw new Error("Method 'process()' must be implemented");
    }
    // simple method
    checkCode(code){
        console.log("Code: " + code);
    }
}

class CreditCardPayment extends Payment {
    process() {
        //TODO
    }
}

class PayPalPayment extends Payment {
    process() {
        console.log("Processing PayPal payment");
    }
}

const payment = new CreditCardPayment();

payment.checkCode("1231231231")
payment.process();

// const payments = [
//     new CreditCardPayment(),
//     new PayPalPayment()
// ];
//
// payments.forEach(p => p.process());