let price = 0;

const deliveryTo = prompt("В какую страну Вы хотели бы сделать заказ?");

const normalizedDeliveryTo = deliveryTo.toLowerCase();

switch (normalizedDeliveryTo) {
  case "китай":
    price = 100;
    break;

  case "чили":
    price = 250;
    break;

  case "австралия":
    price = 170;
    break;

  case "индия":
    price = 80;
    break;

  case "ямайка":
    price = 120;
    break;

  default:
    const message = `В Вашей стране доставка не доступна`;
    alert(message);
}

console.log(
  `Доставка в ${normalizedDeliveryTo} будет стоить ${price} кредитов`
);
