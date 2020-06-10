let assert = require("assert");
let ShoppingCart = require("./shopping-cart");

describe("The shopping cart", () => {
  describe("subtotal should", () => {
    it("be 0 if no items are passed in", () => {
      // arrange
      let shoppingCart = new ShoppingCart();
      // act
      let subtotal = shoppingCart.subtotal;
      // assert
      assert.equal(subtotal, 0);
    });
  });
  describe("subtotal should", () => {
    it("be the sum of the price * quantity for all items", () => {
      // arrange
      let shoppingCart = new ShoppingCart([
        {
          name: "boots",
          quantity: 2,
          price: 50,
        },
        {
          name: "lamp",
          quantity: 1,
          price: 20,
        },
      ]);
      // act
      let subtotal = shoppingCart.subtotal;
      // assert
      assert.equal(subtotal, 120);
    });
  });
});
