module.exports = class ShoppingCart {
  constructor(items = []) {
    this._items = items;
  }

  add(item) {
    this._items.push(item);
    return item;
  }

  get subtotal() {
    return this._items.reduce((acc, currentItem) => {
      acc += currentItem.quantity * currentItem.price;
      return acc;
    }, 0);
  }
};
