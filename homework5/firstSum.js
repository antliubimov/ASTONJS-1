const firstSum = (arr, total) => {
  const arrSet = new Set(arr);;
  for (let i = 0; i < arr.length; i += 1) {
    const diff = total - arr[i];
    if (arrSet.has(diff)) {
      return [arr[i], diff];
    }
  }
  return [];
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const total = 13;
firstSum(arr, total); //result = [4, 9]

/* Временная сложность алгоритма O(n), т.к. последовательно идем по всем элементам массива за один цикл, has - O(1), O(n + 1) => O(n). Пространственная сложность O(n), т.к. используем массив размера n - пространство O(n), и для хранения элементов в множестве тоже берем за пространство O(n), получаем O(n + n) = O(2n), коэффициент 2 не учитывается, следовательно получаем O(n). */