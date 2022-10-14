// Minimal
// First task
const a = 0.1;
const b = 0.2;
console.log((a +b).toFixed(1));

// Second task
const firstNum = '1';
const secondNum = 2;
console.log(+firstNum + secondNum);

// Third task
const freeSpace = prompt('Вкажіть обсяг накопичувача(в Гб), щоб дізнатись скільки на ній поміститься файлів розміром 820 Мб.');
const gigabyte = 1024;

alert(Math.floor(freeSpace * gigabyte / 820));

// Normal
// First task
const sum = prompt('Введіть ваш бюджет.');
const price = prompt('Введіть ціну шоколадки.');

alert(`Ви можете придбати ${Math.floor(sum / price)} шоколадки(-ок), залишок коштів - ${(sum % price).toFixed(2)}.`);

// Maximum
// First task
const userSum = prompt('Процентна ставка депозиту - 5% річних, вам потрібно покласти на 2 місяці. Скільки покладете?');
const percent = 5 / 100 / 6  + 1;

alert(`Ви отримаєте ${(userSum * percent).toFixed(2)}.`);