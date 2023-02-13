// Задание 7_1

/*Написать, функцию, которая принимает в качестве аргумента объект 
и выводит в консоль все ключи и значения только собственных свойств. 
Данная функция не должна возвращать значение.*/

const obj = {
  City: "Moscow",
  Name: "Victor",
};

const getObject = function () {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(key, obj[key]);
    }
  }
};

getObject();
