let total = 0;

while (true) {
  let input = prompt("Введите число");

  if (input === null) {
    break;
  }

  input = Number(input);
  const notANumber = Number.isNaN(input);

  if (notANumber) {
    const message = `Было введено не число, попробуйте еще раз`;
    alert(message);
    continue;
  }

  total += input;
}
const message = `Общая сума чисел равна ${total}`;
alert(message);
