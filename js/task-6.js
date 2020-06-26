let total = 0;

while (true) {
  let input = prompt("Введите число");

  if (input === null) {
    break;
  }

  input = Number(input);
  const notANumber = Number.isNaN(input);

  if (notANumber) {
    let message = `Было введено не число, попробуйте еще раз`;
    alert(message);
    continue;
  }

  total += input;
}
let message = `Общая сума чисел равна ${total}`;
alert(message);
