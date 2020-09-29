const CustomError = require("../extensions/custom-error");

module.exports = function transform(/* arr */) {
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
/*
module.exports = function transform( arr ) {
  `--discard-next`
  `--discard-prev` 
  `--double-next` 
  `--double-next`
  arr.map(function(){

  })
  return arr.find(`--discard-next`)
  // remove line with error and write your code here
};
*/


/*
Ваша задача — реализовать функцию `transform(arr)`, которая принимает массив (тип `array`) и возвращает **преобразованный** массив,
 основываясь на **управляющих последовательностях**, которые содержит `arr`. 
 **Управляющие последовательности** — это определенные строковые элементы вышеупомянутого массива:
* `--discard-next` исключает следующий за ней элемент исходного массива из преобразованного массива.
* `--discard-prev` исключает предшествующий ей элемент исходного массива из преобразованного массива.
* `--double-next` удваивает следующий за ней элемент исходного массива в преобразованном массиве.
* `--double-next` удваивает предшествующий ей элемент исходного массива в преобразованном массиве.

Например:

`transform([1, 2, 3, '--double-next', 4, 5])` => `[1, 2, 3, 4, 4, 5]`

`transform([1, 2, 3, '--discard-prev', 4, 5])` => `[1, 2, 4, 5]`

Функция не должна изменять исходный массив. Управляющие последовательности применяются **последовательно, слева направо**. Управляющие последовательности **не попадают** в преобразованный массив. Управляющие последовательности в исходном массиве не встречаются подряд (не следуют одна за другой). Если около управляющей последовательности **нет элемента**, к которому она может быть применена, **она не делает ничего**. Функция должна выбросить ошибку, если `arr` не является массивом. 

Напишите свой код в `src/transform-array.js`.
 */