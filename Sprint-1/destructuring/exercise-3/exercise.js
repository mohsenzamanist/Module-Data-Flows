let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

const printReceipt = (order) => {
  console.log("QTY     ITEM                TOTAL");
  let total = 0;
  order.forEach(({ itemName, quantity, unitPricePence }) => {
    console.log(
      `${quantity}${" ".repeat(7)}${itemName}${" ".repeat(20 - itemName.length)}${String(unitPricePence / 100).padEnd(4, 0)}`
    );
    total += unitPricePence;
  });
  console.log(`\nTotal: ${String(total / 100).padEnd(4, 0)}`);
};

printReceipt(order);
