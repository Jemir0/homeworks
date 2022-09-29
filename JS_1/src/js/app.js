// Normal
// First task
const userName = prompt('1. Як вас звати?');
alert('Привіт, ' + userName + '.');

// Second task
const currentYear = 2022;
const userBirthYear = prompt('2. Вкажіть свій рік народження.');
const userAge = currentYear - userBirthYear;
alert('Ваш вік - ' + userAge + '.');

// Third task
const perimeter = prompt('3. Вкажіть довжину сторони квадрату (в сантиметрах), щоб дізнатись його периметр.');
alert('Периметр квадрата - ' + perimeter * 4 + ' см.');

// Maximum
// Fourth task
const radius = prompt('4. Вкажіть радіус кола (в сантиметрах), щоб дізнатись його площу.');
alert('Площа кола ' + (Math.PI * Math.pow(radius, 2)).toFixed(2) + ' см^2.');

//Fifth task
const distance = prompt('5.1 Вкажіть відстань між містами (в кілометрах).');
const time = prompt('5.2 Вкажіть час за який ви хочете подолати цю відстань (в годинах).');
alert('Щоб подолати цю відстань за вказаний проміжок часу, потрібно рухатись зі швидкістю ' + distance / time + ' км/год.');

// Sixth task
const exchangeEuro = 36.85;
const exchangeDollar = 36.95;

let exchange = prompt('6. Введіть кількість доларів, які ви хочете перевести в євро.');
let result = (exchangeEuro / exchangeDollar) * exchange;
alert(result.toFixed(2)  + '€');
