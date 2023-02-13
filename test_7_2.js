// Задание 7_2

/*Написать функцию, которая принимает в качестве аргументов строку и объект, 
а затем проверяет есть ли у переданного объекта свойство с данным именем. 
Функция должна возвращать true или false.*/

const newObj = {
  City: "Moscow",
  Name: "Victor",
};

const newStr = "City";

const checkObject = function (ob1, ob2) {
  console.log(ob2 in ob1);
};

checkObject(newObj, newStr);
