/*
* Написать функцию, которая принимает массив чисел, например [1,2,3,4,5] и функция возращает среднее арифметическое, (округлить результат до десятых)
* */

function abs(array) {
    let sum = 0;
    for(i = 0; i < array.length; i++) {
      sum += array[i];
      } 
      sum = sum / array.length;
      return Number(sum.toFixed(1));
}









































module.exports = abs