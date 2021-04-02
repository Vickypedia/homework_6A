//I am honestly very confused by the javascript section
//probably will come to office hours later
//these are created following a tutorial from Youtube
//here is the link: https://youtube.com/playlist?list=PLoN_ejT35AEhzNoPStBzAkpqAu3YQwPj7
var cart = [];
var Item = function(name, glaze, count, price) { //individual items in the cart
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
