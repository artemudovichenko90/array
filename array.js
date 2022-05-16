'use strict'
//1. Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
{
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  const arrResult = arr1.concat(arr2);
}

//2. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
{
  const arr = [1, 2, 3];
  const arrReverse = arr.reverse();
}

//3. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
{
  const arr = [1, 2, 3];
  arr.push(4, 5, 6);
}

//4. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
{
  const arr = [1, 2, 3];
  arr.unshift(4, 5, 6);
}

//5. Дан массив ['js', 'css', ‘html']. Выведите на экран первый элемент и удалите его.
{
  const arr = ['js', 'css', 'html'];
  console.log(arr.shift());
}

//6. Дан массив ['js', 'css', ‘html']. Выведите на экран последний элемент и удалите его.
{
  const arr = ['js', 'css', 'html'];
  console.log(arr.pop());
}

//7. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
{
  const arr = [1, 2, 3, 4, 5];
  const newArr = arr.slice(0, 3);
}

//8. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
{
  const arr = [1, 2, 3, 4, 5];
  const newArr = arr.slice(3);

}

//9. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
{
  const arr = [1, 2, 3, 4, 5];
  arr.splice(1, 2);
}

//10. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
{
  const arr = [1, 2, 3, 4, 5];//в старом массиве осталось [1, 5]
  const newArr = arr.splice(1, 3);
}

//11. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
{
  const arr = [1, 2, 3, 4, 5]
  const newArr = arr.splice(3, 0, 'a', 'b', 'c');
}

//12. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
//v.1
{
  const arr = [1, 2, 3, 4, 5];
  arr.splice(1, 0, 'a', 'b');
  arr.splice(6, 0, 'c');
  arr.splice(8, 0, 'e');
}
//v.2
{
  const arr = [1, 2, 3, 4, 5];
  arr.splice(0, 5, 1, 'a', 'b', 2, 3, 4, 'c', 5, 'e');
}

//13. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
{
  const arr = [3, 4, 1, 2, 7];
  arr.sort();
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//1 и 2 задачи одинаковые
//В задачах не указаны инструменты, которые нужно использовать. Поэтому решал теми, что пришли первыми в голову.

//1. Необходимо создать функцию hasElem, которая параметрами будет принимать массив и строку,
// и возвращать true, если строка есть в массиве, и false - если нет
/**
 * Return true if the string is in an array, otherwise returns false
 * @param {array} arr 
 * @param {string} str 
 * @returns {boolean}
 */
const hasElem = function (arr, str) {
  return arr.includes(str);
}

//2. Дан массив с числами. Проверьте, что в этом массиве есть указанное число.
//Если есть - вернуть true, а если нет - вернуть false.
/**
 * Return true if the number is in an array, otherwise returns false
 * @param {array} arr 
 * @param {number} num 
 * @returns {boolean}
 */
const hasNum = function (arr, num) {
  return arr.includes(num);
}

//3. Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд.
//Если есть -  вернуть true[2,2,1], а если нет - вернуть false[1,2,1]
/**
 * Checks if an array contains two identical numbers together
 * @param {array} arr 
 * @returns {boolean}
 */
const hasTwoIdenticalNumbersTogether = function (arr) {
  return arr.some((element, index, arr) => index !== 0 && element === arr[index - 1]);
}

//4. Функция, которая возвращает массив заполненный 10 случайными числами в интервале от 5 до 33. Math.random()
/**
 * Returns n-size array of random numbers, range from min to max 
 * @param {number} size 
 * @param {number} min 
 * @param {number} max 
 * @returns {array}
 */
const createRandomArr = function (size, min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  const arr = Array(size).fill(0);
  arr.forEach((e, i, arr) => arr[i] = Math.floor(Math.random() * (max - min + 1)) + min);
  return arr;
}
console.log(createRandomArr(10, 5, 33));

//5. Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.
/**
 * Calculates average of array
 * @param {array} arr 
 * @returns {number}
 */
const avg = function (arr) {
  if (arr.length === 0) return 0;
  return arr.reduce((accumulator, current) => accumulator + current) / arr.length;
}
console.log(avg([12, 15, 20, 25, 59, 79]));