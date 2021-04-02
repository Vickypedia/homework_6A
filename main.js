
        //cost of all products
        //var total = 0;
        //index
        //var i = 1;
        //message
        //var message = "item successfully added to cart!";
        //list of the amount of every product in the cart
        //var itemCost = [];
        //add to cart
        //function add(n){

//show cart

//function(){
    //const cartInfo = document.getElementByID("cart-info");
    //const cart = document.getElementByID("cart");

    //cart.classList.toggle()

//}

var cart = [];
var Item = function(name, glaze, count, price) {
        this.name = name
        this.glaze = glaze
        this.count = count
        this.price = price
}

function addItemToCart(name, glaze, count, price) {
    var item = new Item(name, glaze, count, price);
    cart.push(item);
    saveCart();
}

function removeItemFromCart(name) {
    for (var i in cart) {
        if ( cart[i].name === name) {
            cart.splice(i, 1);
            break;
        }
    }
    saveCart();
}

function clearCart() {
    cart = [];
    saveCart();
}

function countCart() {
    var totalCount = 0;
    for (var i in cart) {
        totalCount += cart[i].count;
    }
    return totalCount;
}


function totalCart() {
    var totalCost = 0;
    for (var i in cart) {
        totalCost += cart[i].price;
    }
    return totalCost;
}

function saveCart() {
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
}

function loadCart() {
    cart = JSON.parse(localStorage.getItem("shoppingCart"));
}

loadCart();
