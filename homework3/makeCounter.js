// Function declaration
// function makeCounter() {
//   let count = 0;
//   return function () {
//     count += 1;
//     return count;
//   }
// };

// Function expression
// const makeCounter = function () {
//   let count = 0;
//   return function () {
//     count += 1;
//     return count;
//   }
// }

// Arrow function
const makeCounter = () => {
  let count = 0;
  return () => {
    count += 1;
    return count;
  }
};
