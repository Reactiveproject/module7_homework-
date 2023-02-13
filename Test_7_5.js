// Задание 7_5

/*Переписать консольное приложение из предыдущего юнита (Задание 7_4) на классы.*/

class ElectroItmes {
  constructor(power) {
    (this.power = power), (this.status = "off");
  }
  switchOn = function () {
    this.status = "on";
  };
  switchOff = function () {
    this.status = "off";
  };
}

class KitchenItems extends ElectroItmes {
  constructor(name, brand, power, color) {
    super(power),
      (this.name = name),
      (this.brand = brand),
      (this.power = power),
      (this.color = color);
  }
  getInfoKitchen = function () {
    console.log(
      `${this.name} ${this.brand} gets ${this.power} watts and it is ${this.status} now`
    );
  };
}

class BedroomItems extends ElectroItmes {
  constructor(name, brand, power, weight) {
    super(power),
      (this.name = name),
      (this.brand = brand),
      (this.power = power),
      (this.weight = weight);
  }
  getInfoBedroom = function () {
    console.log(
      `${this.name} ${this.brand} gets ${this.power} watts and it is ${this.status} now`
    );
  };
}

const lamp = new BedroomItems("lamp", "Sovok", 60, 200);
const iron = new BedroomItems("iron", "Bork", 1500, 600);
const kettle = new KitchenItems("kettle", "Philips", 2000, "green");

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

lamp.switchOn();
iron.switchOff();
kettle.switchOn();

lamp.getInfoBedroom();
iron.getInfoBedroom();
kettle.getInfoKitchen();

getSumPower(iron, kettle, lamp);
