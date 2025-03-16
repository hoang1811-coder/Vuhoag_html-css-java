const cart = [

    { name: "Mèn mén", price: 30000, quantity: 2 },

    { name: "Mì tôm", price: 5000, quantity: 1 },

    { name: "Bánh bao", price: 15000, quantity: 3 }

];
function sum(cart) {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
}
const totalAmount = sum(cart)
console.log("Tổng tiền hàng là:", +totalAmount);