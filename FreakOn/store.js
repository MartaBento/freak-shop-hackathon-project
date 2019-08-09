$(function () {
  $("#my-cart-btn").myCart(options);
});

var options = {
  currencySymbol: '$',
  classCartIcon: 'my-cart-icon',
  classCartBadge: 'my-cart-badge',
  classProductQuantity: 'my-product-quantity',
  classProductRemove: 'my-product-remove',
  classCheckoutCart: 'my-cart-checkout',
  affixCartIcon: true,
  showCheckoutModal: true,
  numberOfDecimals: 2,
  cartItems: [

  ],
  clickOnAddToCart: function($addTocart){
    goToCartIcon($addTocart);
  },
  afterAddOnCart: function(products, totalPrice, totalQuantity) {
    console.log("afterAddOnCart", products, totalPrice, totalQuantity);
  },
  clickOnCartIcon: function($cartIcon, products, totalPrice, totalQuantity) {
    console.log("cart icon clicked", $cartIcon, products, totalPrice, totalQuantity);
  },
  checkoutCart: function(products, totalPrice, totalQuantity) {
    // return false, from this function 
    // if precondition of checking out is invalid
    // if(!willProceedToCheckout) return false;
    var checkoutString = "Total Price: " + totalPrice + "\nTotal Quantity: " + totalQuantity;
    checkoutString += "\n\n id \t name \t summary \t price \t quantity \t image path";
    $.each(products, function(){
      checkoutString += ("\n " + this.id + " \t " + this.name + " \t " + this.summary + " \t " + this.price + " \t " + this.quantity + " \t " + this.image);
    });
    alert(checkoutString)
    console.log("checking out", products, totalPrice, totalQuantity);
  },
  getDiscountPrice: function(products, totalPrice, totalQuantity) {
    console.log("calculating discount", products, totalPrice, totalQuantity);
    return totalPrice * 0.5;
  }
};
