const total = 100;
const ordered = 50;

if (ordered >= total) {
  console.log("На складе недостаточно товаров!");
} else if (total >= ordered) {
  console.log("Заказ оформлен, с вами свяжется менеджер");
}
