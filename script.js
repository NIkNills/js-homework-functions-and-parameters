"use strict";

const helloWorld = "Hello world";

const user = {
  name: "John",
  surname: "Doe",
  age: 28,
};

user.skill = "React";
user.gender = "male";

user.sayHelloWorld = () => helloWorld;
user.sayHi = function () {
  return `${this.name} ${this.surname} says Hi`;
};

function showPropAndValues(obj) {
  for (let prop in obj) {
    console.log(`${prop}: ${obj[prop]}`);
  }
}
