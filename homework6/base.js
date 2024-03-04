// 1)
console.log('1');
setTimeout(() => console.log('2'), 1);
let promiseNew = new Promise((resolve) => {
  console.log('3');
  resolve();
});
promiseNew.then(() => console.log('4'));
setTimeout(() => console.log('5'));
console.log('6');
/* В начале выполняется console.log('1'), затем setTimeout(() => console.log('2'), 1) отправляется в macrotasks, затем переменной promiseNew присваевается промис, в нем выполняется синхронный console.log('3') и резолвится, отправляется promiseNew.then(() => console.log('4')) в microtasks, затем setTimeout(() => console.log('5')) отпарвляется в macrotasks, выполняется синхронный console.log('6'), выполняется микрозадачи - промис () => console.log('4'), затем выполняются макрозадачи, т.к. 1мс уже прошла, то выполняется () => console.log('2'), затем () => console.log('5')
Вывод:
  1
  3
  6
  4
  2
  5
*/

// 2)
let promiseTree = new Promise((resolve, reject) => {
  resolve("a");
  console.log("1");
  setTimeout(() => {
    console.log("2");
  }, 0);
  console.log("3");
});
/*  Переменной promiseTree присваивается промис, resolve("a") возвращает промис с "а", затем выполняется console.log("1"), setTimeout отправляется в макрозадачи, выполняется console.log("3"), затем console.log("2") из setTimeout
Вывод:
  1
  3
  2
*/
// 3)
let promiseTwo = new Promise((resolve, reject) => {
  resolve("a");
});
promiseTwo
  .then((res) => {
    return res + "b";
  })
  .then((res) => {
    return res + "с";
  })
  .finally((res) => {
    return res + "!!!!!!!";
  })
  .catch((res) => {
    return res + "d";
  })
  .then((res) => {
    console.log(res);
  });
/* Переменной promiseTwo присваивается промис, который резолвится и возвращает промис со значением "а", которая передается в первый then, который возвращает промис со значением "ab", выполняется второй then, передаеем в него "ab" и возвращаем промис со значением "abc", выполняется finally, он не получает результата предыдущего обработчика  и если что-то из него возвращается, то это игнорируется, catch пропускается, и выполняется последний then, выводящий в консоль "abc"
Вывод:
  abc
*/

// 4)
function doSmth() {
  return Promise.resolve("123");
}
doSmth()
  .then(function (a) {
    console.log("1", a); //
    return a;
  })
  .then(function (b) {
    console.log("2", b);
    return Promise.reject("321");
  })
  .catch(function (err) {
    console.log("3", err);
  })
  .then(function (c) {
    console.log("4", c);
    return c;
  });
/* Объявляется функция doSmth, дальше выполняется doSmth, возвращающая успешно выполненный промис за значением "123", выполняется первый then, выводит в консоль "1 123", и возвращает промис со значением "123", выполняется второй промис, выводит в консоль "2 123" и возвращает отклоненный промис со значением "321", дальше ccatch перехватывает это и вывод в консоль "3 321" и возвращает промис со значением undefined, выполняется последний then и выводит в консоль "4 undefined" и возвращает промис с значением undefined.
Вывод:
  1 123
  2 123
  3 321
  4 undefined
*/

// 5)
console.log("1");
setTimeout(function () {
  console.log("2");
}, 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");
/* Выполняется console.log("1"), затем setTimeout отправляется в макрозадачи, затем Promise.resolve() отправляется в микрозадачи, выполняется console.log("4"), затем console.log("3") из микрозадачи, затем выполняется console.log("2") из макрозадачи
Вывод:
  1
  4
  3
  2
*/