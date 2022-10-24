//факториал
function factorial(n) {
  let a = n;
  if (n === 0 || n === 1) {
    return 1;
  }
  while (n > 1) {
    n--;
    a * n;
  }
  return a;
}

//длина самого длинного слова
function string(str) {
  // Наименование переменной делай более осмысленно, пусть оно будет большое по типу formattedArray или просто array, но зато в дальнейшем будет понятно что это
  // почему переменная let?
  let a = str.split(" "); 
  let result = 0;
  // Выполнить перебор массива с помощью метода массива из ES6
  for (let i = 0; i < a.length; i++) {
    if (a[i].length > result) {
      result = a[i].length;
    }
  }
  return result;
}

// 3. Написать функцию, которая на вход принимает массив, состоящий из массивов целых
// чисел (например: [[1, 2, 3], [4, 5], [6, 7, 8, 9]]) и возвращает массив состоящий из
// наибольшего числа каждого предоставленного подмассива.

function getNumberMaxArray(arr) {
  let maxNumber = 0;
  let tempNumber = 0;
  const newArray = [];
  // Выполнить перебор массива с помощью метода массива из ES6
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      tempNumber = arr[i][j];
      if (tempNumber > maxNumber) {
        maxNumber = tempNumber;
      }
    }
    newArray.push(maxNumber);
    maxNumber = 0;
  }
  return newArray;
}

// 4. Написать функцию, которая на вход принимает строку и целое число и обрезает строку
// (первый аргумент), если она длиннее заданной максимальной длины строки (второй
// аргумент) и возвращает обрезанную строку с «…» в конце.

function cutString(str, number) {
  let result = ""; // Что за переменная?
  if (str.length > number) {
    return str.slice(0, number) + "...";
  }
  return str;
}

// 5. Написать функцию, которая на вход принимает строку и возвращает эту строку в
// формате: каждое слово начинается с заглавной буквы, остальные в нижнем регистре.

// Еще разок посмотреть на задание и проверить строку типа: "ТеСт тесТ тЕСТ"
function upperCaseString(str) {
  let a = str.split(" ");
  /// Выполнить перебор массива с помощью метода массива из ES6
  for (let i = 0; i < a.length; i++) {
    a[i] = a[i][0].toUpperCase() + a[i].split(1);
  }
  return a.join(" ");
}

// 6. Написать функцию, которая на вход принимает два массива и целое число n. Функция
//должна скопировать каждый элемент первого массива во второй по порядку начиная с
//индекса n второго массива и вернуть полученный массив. Входные массивы не должны
//изменяться. (например: при входных данных ([1, 2, 3], [4, 5], 1) должно вернуться [4, 1, 2,
//3, 5].

function copyArray(oneArray, twoArray, number) {
  //Почему переменная let?
  let newArray = twoArray.slice();// Посмотреть что такое spread 
  newArray.splice(number, 0, ...oneArray);
  return newArray;
}

//7. Написать функцию, которая на вход принимает массив и удаляет в нем все "ложные
//значения" (https://developer.mozilla.org/ru/docs/%D0%A1%D0%BB%D0%BE%D0%B2%D0%B0%D1%80%D1%8C/Falsy)

function trueArray(arr) {
  return arr.filter((item) => item);
}

//8. Написать функцию, которая на вход принимает массив, состоящий из двух строк.
//Функция должна вернуть true, если строка в первом элементе массива содержит все
//буквы строки во втором элементе массива (регистр игнорируется).

//(регистр игнорируется) не увидел этого функционала
function stringArray(arr) {
  for (let i = 0; i < arr[1].length; i++) {
    if (!arr[0].includes(arr[1][i])) {
      return false;
    }
  }
  return true;
}

//9. Написать функцию, которая на вход принимает масссив и целое число. Функция
//должна разбить массив (первый аргумент) на группы длиной size (второй агрумент) и
//вернуть их в виде двумерного массива.

function splittingArray(arr, number) {
  //Почему переменная let?
  let newArray = [];
  while (arr.length > 0) {
    newArray.push(arr.splice(0, number));
  }
  return newArray;
}

//10. Используя рекурсию (без использования циклов). Написать функцию, которая
//принимает массив и целое число (n) и заполняет массив числами от n до 1.

function recursion(arr, number) {
  if (number !== 0) {
    arr.push(number);
    recursion(arr, number - 1);
  } else {
    return arr;
  }
}

//  Написать свою реализацию функций: map, filter, find, some, every.

function map(arr, fun) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(fun(arr[i]));
  }
  return newArray;
}

function filter(arr, fun) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (fun(arr[i])) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

function find(arr, fun) {
  for (let i = 0; i < arr.length; i++) {
    if (fun(arr[i])) {
      return arr[i];
    }
  }
}

function some(arr, fun) {
  for (let i = 0; i < arr.length; i++) {
    if (fun(arr[i])) {
      return true;
    }
  }
  return false;
}

function some(arr, fun) {
  for (let i = 0; i < arr.length; i++) {
    if (!fun(arr[i])) {
      return false;
    }
  }
  return true;
}
