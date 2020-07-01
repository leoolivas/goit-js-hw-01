let credits = 23580;
const pricePerDroid = 3000;
let totalPrice;

let orderedQuantity = prompt("Какое количество дроидов Вы хотели бы купить?");

if (orderedQuantity === null) {
  console.log("Отменено пользователем!");
} else {
  totalPrice = pricePerDroid * orderedQuantity;
}

if (totalPrice > credits) {
  console.log("Недостаточно средств на счету!");
} else {
  credits -= totalPrice;
  console.log(
    `Вы купили ${orderedQuantity} дроида(ов), на счету осталось ${credits}`
  );
}
