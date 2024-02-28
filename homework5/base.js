// Задание 1
// Перечислить какие бывают алгоритмы сортировок?
// 1. Сортировка пузырьком
// 2. Сортировка выбором
// 3. Сортировка вставками
// 4. Сортировка слиянием
// 5. Быстрая сортировка
// 6. Пирамидальная сортировка


// Задание 2
/* Создать объект Person несколькими способами, после создать объект AnotherPerson, чтобы в нём были доступны методы объекта Person. Добавить метод logInfo, чтоб он был доступен всем объектам. */

// через литерал объекта
{
  const person = {};
  const anotherPerson = {};
  Object.setPrototypeOf(anotherPerson, person);

  person.logInfo = function () { };
}
// Через функцию-конструктор
{
  function Person() { };

  function AnotherPerson() {
    Person.call(this);
  };
  AnotherPerson.prototype = Object.create(Person.prototype);
  AnotherPerson.prototype.constructor = AnotherPerson;

  Person.prototype.logInfo = function () { };
}
// Через класс
{
  class Person {
    constructor() { }
  }

  class AnotherPerson extends Person {
    constructor() {
      super();
    }
  }

  Person.prototype.logInfo = function () { };
}


// Задание 3
/* Создать класс SuperPerson c get и set для поля name и конструктором, сделать класс наследник от класса SuperPerson. */
class SuperPerson {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }
}

class BestSuperPerson extends SuperPerson {
  constructor(name) {
    super(name);
  }
}
