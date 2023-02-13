// Задание 7_4

/*Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
Определите иерархию электроприборов. Включите некоторые в розетку. 
Посчитайте суммарную потребляемую мощность всех включенных приборов (передайте аргумент). 
Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). 
Выбрав прибор, подумайте, какими свойствами он обладает.*/

/*
1. Таршер (60 Вт) - Спалья
2. Утюг (1500 Вт) - Спалья
3. Чайник (2000 Вт) - Кухня
*/

// Родительская функция (определяет базовые пераметры - мощность, текущее и состояние (вкл/выкл))
function ElectroItmes(power) {
  (this.power = power), (this.status = "off");
  // (this.getInfo = function () {
  //   console.log(`Item ${this.brand} is  and gets ${this.power} watts`);
  // });
}

// Дочерние функции для определения уникальных парметров приборов в группах
function KitchenItems(name, brand, power, color) {
  (this.name = name),
    (this.brand = brand),
    (this.power = power),
    (this.color = color);
  this.getInfoKitchen = function () {
    console.log(
      `${this.name} ${this.brand} gets ${this.power} watts and it is ${this.status} now`
    );
  };
}
KitchenItems.prototype = new ElectroItmes();

function BedroomItems(name, brand, power, weight) {
  (this.name = name),
    (this.brand = brand),
    (this.power = power),
    (this.weight = weight);
  this.getInfoBedroom = function () {
    console.log(
      `${this.name} ${this.brand} gets ${this.power} watts and it is ${this.status} now`
    );
  };
}
BedroomItems.prototype = new ElectroItmes();

// Создаем приборы
const lamp = new BedroomItems("lamp", "Sovok", 60, 200);
const iron = new BedroomItems("iron", "Bork", 1500, 600);
const kettle = new KitchenItems("kettle", "Philips", 2000, "green");

// Функция включения прибора (в исходном - выключено,  при включении - текущее потребление)
ElectroItmes.prototype.switchOn = function () {
  this.status = "on";
};

// Функкция выключения прибора
ElectroItmes.prototype.switchOff = function () {
  this.status = "off";
};

// // Функция по отражению статуса и передачи данных потребления
// ElectroItmes.prototype.getCurrentPower = function () {
//   if (this.status === "on") {
//     return this.power;
//   } else {
//     return 0;
//   }
// };

// //Функция подсчета суммарной мощности в определенный момент
// function getSumPower() {
//   return (
//     lamp.getCurrentPower() + iron.getCurrentPower() + kettle.getCurrentPower()
//   );
// }

function getSumPower(x, y, z) {
  let a = x.power;
  let b = y.power;
  let c = z.power;
  if (x.status === "off") {
    a = 0;
  }
  if (y.status === "off") {
    b = 0;
  }
  if (z.status === "off") {
    b = 0;
  }
  console.log(
    `Summary electricity consumption at the moment is - ${a + b + c} watts`
  );
}

// console.log(lamp);
// console.log(kettle);
// console.log(iron);

lamp.getInfoBedroom();
iron.getInfoBedroom();
kettle.getInfoKitchen();

lamp.switchOn();
iron.switchOn();
kettle.switchOn();

getSumPower(iron, kettle, lamp);
