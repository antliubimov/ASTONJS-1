### Базовый:
Написать функцию pattern, принимающую на вход число n и возвращающую в консоли паттерн:
pattern(5):
    1
   121
  12321
 1234321
123454321
 1234321
  12321
   121
    1

### Продвинутый:
Написать класс PaginationUtil. Класс принимает массив значений (типы не имеют значения) и число, отображающее количество элементов на странице.
Пример реализации:
const helper = new PaginationUtil(['a','b','c','d','e','f'], 4);
helper.pageCount(); // 2
helper.itemCount(); // 6
helper.pageItemCount(0); // 4
helper.pageItemCount(1); // на последней странице - 2
helper.pageItemCount(2); // -1, так как такой страницы нет
pageIndex - принимает индекс элемента в массиве значений и возвращает его страницу, иначе -1
helper.pageIndex(5); // 1
helper.pageIndex(2); // 0
helper.pageIndex(20); // -1
helper.pageIndex(-10); //-1