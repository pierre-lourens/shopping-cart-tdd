let { expect } = require("chai");
let ShoppingCart = require("./shopping-cart");

describe("The shopping cart", () => {
  describe("subtotal should", () => {
    it("be 0 if no items are passed in", () => {
      // arrange
      let shoppingCart = new ShoppingCart();
      // act
      let subtotal = shoppingCart.subtotal;
      // assert
      expect(subtotal).to.equal(0);
    });

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
      expect(subtotal).to.equal(120);
    });
  });

  describe("add method should", () => {
    it("store the item in the shopping cart", () => {
      let shoppingCart = new ShoppingCart([
        {
          id: 1,
          quantity: 4,
          price: 50,
        },
      ]);

      shoppingCart.add({
        id: 2,
        quantity: 2,
        price: 30,
      });

      expect(shoppingCart._items).to.deep.equal([
        {
          id: 1,
          quantity: 4,
          price: 50,
        },
        {
          id: 2,
          quantity: 2,
          price: 30,
        },
      ]);
    });

    it("return the item that was just stored in shopping cart", () => {
      let shoppingCart = new ShoppingCart([
        {
          id: 1,
          quantity: 4,
          price: 50,
        },
      ]);

      const bananas = {
        id: 2,
        quantity: 2,
        price: 30,
      };

      expect(shoppingCart.add(bananas)).to.equal(bananas);
    });
  });
});
