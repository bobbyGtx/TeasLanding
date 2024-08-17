var mercedes = {
    name: 'Mercedes',
    model: 'GL450',
    engine: 4.0,
    year: 2015,
    color: 'black',
    hp: 300,
    forSale: true,
};
var bmw = {
    name: 'BMW',
    model: 'X6',
    engine: 3.0,
    year: 2018,
    color: 'white',
    hp: 313,
    forSale: false,
};
var audi = {
    name: 'Audi',
    model: 'Q7',
    engine: 3.0,
    year: 2021,
    color: 'blue',
    hp: 249,
    forSale: true,
};

var year = 2024;
mercedes.carAge = year - mercedes.year;
bmw.carAge = year - bmw.year;
audi.carAge = year - audi.year;

var names = (mercedes.name + ' ' + mercedes.model + ', ') + (bmw.name + ' ' + bmw.model + ', ') + (audi.name + ' ' + audi.model);
var averageAge = (mercedes.carAge + bmw.carAge + audi.carAge) / 3;
var atLeastOneForSale = audi.forSale || audi.forSale || mercedes.forSale;
var qYears = 5;
var allYoungerThanFive = mercedes.carAge < qYears && bmw.carAge < qYears && audi.carAge < qYears;
var qHp = 250;
var atLeastOneHasLittleHp = bmw.hp < qHp || mercedes.hp < qHp || audi.hp < qHp;

alert('Марка и модельвсех авто - '+names +'.');
alert('Средний возраст автомобилей - '+averageAge +'.');
alert('Хотя бы один автомобиль продаётся? '+(atLeastOneForSale===false ? 'нет':'да') +'.');
alert('Все авто младше 5 лет? '+(allYoungerThanFive===false ? 'нет':'да') +'.');
alert('Хоть один автомобиль имеет менее 250 лошадиных сил? '+(atLeastOneHasLittleHp===false ? 'нет':'да') +'.');

// 2 часть
var car = bmw;
if (car.name === 'Mercedes' && car.model === 'GL450') {
    alert('Мой любимый Мерседес');
} else {
    alert('Это - ' + car.name + ' ' + car.model);
}
if (car.carAge === 0) {
    alert('Новый автомобиль');
} else if (car.carAge <= 3) {
    alert('Свежий автомобиль');
} else {
    alert('Лет этому авто: ' + car.carAge);
}
var qEngine = 3.0;
var consumption = car.engine > qEngine ? 'Прожорливый автомобиль' : 'Экономичный автомобиль';
alert(consumption);
var russianColor = null;
switch (car.color) {
    case 'black':
        russianColor = 'черный';
        break;
    case 'silver':
        russianColor = 'серебристый';
        break;
    case 'red':
        russianColor = 'красный';
        break;
    case 'white':
        russianColor = 'белый';
        break;
    case 'gray':
        russianColor = 'серый';
        break;
    case 'blue':
        russianColor = 'синий';
        break;
    default:
        russianColor = 'Невозможно определить цвет автомобиля.';
        break;
}
alert('Цвет автомобиля: '+russianColor+'.');
