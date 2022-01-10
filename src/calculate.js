export const subTotal = (price, quantity) => {
  const subTotal = price * quantity;
  return subTotal.toFixed(2);
};

export const total = (arr) => {
  const sum = arr.reduce((acc, item) => {
    return acc + item.quantity * item.newPrice;
  }, 0);
  return sum.toFixed(2);
};
