module.exports = class ShoppingCart {
  constructor(shoppingList = []) {
    this.shoppingList = shoppingList;
  }

  get subtotal() {
    return this.shoppingList.reduce((acc, currentItem) => {
      acc += currentItem.quantity * currentItem.price;
      return acc;
    }, 0);
  }
};
