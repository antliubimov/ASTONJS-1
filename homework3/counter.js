/* Задание 1 */

// Первый способ
const counter = {
  count: 0,
};

// Второй способ
const counter = new Object();
counter.count = 0;

// Третий способ
function Counter() {
  this.count = 0;
};
const counter = new Counter();

// Четвертый способ
const counter = Object.create({});
counter.count = 0;

// Пятый способ
class Counter {
  constructor() {
    this.count = 0;
  }
};
const counter = new Counter();


/* Задание 2 */
// Первый способ (shadow copy)
const counterCopy = { ...counter };

// Второй способ (shadow copy)
const counterCopy = Object.assign({}, counter);

// Третий способ
const counterCopy = JSON.parse(JSON.stringify(counter));

// Четвертый способ
// При установленной библиотеке lodash
// import _ from 'lodash';
const counterCopy = _.cloneDeep(counter);
