const TAX_RATE = 0.08
const PROMOTE_CODE = "SAVE20"
const DISCOUNT_PERCENTAGE = 0.2

const cartItem = [
{ productName: "Wireless Keyboard", price: 45.00, quantity: 1 },
{ productName: "USB-C Cable", price: 15.00, quantity: 3 },
{ productName: "Curved Monitor", price: 300.00, quantity: 1 }
]

function calculateSubTotal(cartItem){
    //console.log(cartItem)
    let subtotal = 0;
    for(let i = 0; i < cartItem.length; i++ ){
        let productPrice = cartItem[i].price * cartItem[i].quantity // 300 * 2
        subtotal = subtotal + productPrice
    }
    return subtotal
}

function applyDiscount(currentTotal, codeProvide){
    // validate
    if(!codeProvide){
        console.log("Debug: Test1")
        return currentTotal;
    }
    console.log("Debug: Test2")

    if(codeProvide !== PROMOTE_CODE){
        console.log("Debug: Test3")
        console.log("Code is not valid")
        return currentTotal;
    }

    console.log("Debug: Test4")
    return currentTotal - (currentTotal * DISCOUNT_PERCENTAGE)
}

function calculateTax(amount){
    return amount * TAX_RATE
}

function processCheckout(cart, promoteCode){
    // console.log(cart)
    // console.log(promoteCode)
    const subTotal = calculateSubTotal(cart)
    const discount = applyDiscount(subTotal, promoteCode)
    const taxAmount = calculateTax(discount)

    const totalPrice = discount + taxAmount

    console.log("SubTotal: " + subTotal)
    console.log("Discount: " + discount)
    console.log("TaxAmount: " + taxAmount)
    console.log("Total Price: " + totalPrice)

}

processCheckout(cartItem, "SAVE20")