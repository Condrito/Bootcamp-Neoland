/*----------------------------------------------------------------------------------
------------------------**Iteración #1: Buscar el máximo**---------------------------
------------------------------------------------------------------------------------*/

/*Completa la función que tomando dos números como argumento devuelva el más alto.

function sum(numberOne , numberTwo) {
  // insert codefunction sum(numberOne , numberTwo) {
  // insert code
}
*/

function sum(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    console.log(numberOne);
  } else {
    console.log(numberTwo);
  }
}

sum(7, 52);

/*----------------------------------------------------------------------------------
--------------------**Iteración #2: Buscar la palabra más larga**-------------------
------------------------------------------------------------------------------------*/

/***Iteración #2: Buscar la palabra más larga**

Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

Puedes usar este array para probar tu función:

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
  // insert code
}
*/
const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];
function findLongestWord(array) {
  let longestWord = "";
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > longestWord.length) {
      longestWord = array[i];
    }
  }
  return longestWord;
}

console.log(avengers);
console.log(findLongestWord(avengers));

/*----------------------------------------------------------------------------------
-------------------------**Iteración #3: Calcular la suma**-------------------------
------------------------------------------------------------------------------------*/

/*Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz. 

Puedes usar este array para probar tu función:

```jsx
const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
  // insert code
}
```*/

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(array) {
  let suma = 0;
  for (let i = 0; i < array.length; i++) {
    suma += array[i];
  }
  return suma;
}
console.log(sumAll(numbers));

/*----------------------------------------------------------------------------------
-----------------------**Iteración #4: Calcular el promedio**-----------------------
------------------------------------------------------------------------------------*/

/*Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:

```jsx
const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
  // insert code
}
```*/

const numbers2 = [12, 21, 38, 5, 45, 37, 6];
function average(array) {
  let suma = 0;

  for (let i = 0; i < array.length; i++) {
    suma += array[i];
  }
  let promedio = suma / array.length;
  return promedio;
}

console.log(average(numbers2));

/*----------------------------------------------------------------------------------
------------------**Iteración #5: Calcular promedio de strings**--------------------
------------------------------------------------------------------------------------*/

/*Crea una función que reciba por parámetro un array y cuando es un valor number lo sume 
y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:

```jsx
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
  // insert code
}
```*/

const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];

const averageWord = (elements) => {
  let sumElements = 0;
  for (let element of elements) {
    if (typeof element == "number") {
      sumElements += element;
    }
    if (typeof element == "string") {
      sumElements += element.length;
    }
  }
  return sumElements;
};
console.log(averageWord(mixedElements));



/*----------------------------------------------------------------------------------
-------------------------**Iteración #6: Valores únicos**---------------------------
------------------------------------------------------------------------------------*/


/*Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados,
 en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:

const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];
function removeDuplicates(param) {
  // insert code
}
*/

const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];

const removeDuplicates = (foods) => {
  let uniquefoods = [];
  for (let i = 0; i < foods.length; i++) {
    if (uniquefoods.includes(foods[i])){
    } else {(uniquefoods.push(foods[i]))}
    }
  return uniquefoods;
  }


console.log(removeDuplicates(duplicates));




/*----------------------------------------------------------------------------------
-------------------------**Iteración #7: Buscador de nombres**----------------------
------------------------------------------------------------------------------------*/


/*Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array
 - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false.
  Puedes usar este array para probar tu función:

const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function finderName(param) {
  // insert code
}
*/

const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];


/*
const finderName = (array, value) => {
let elementExist = array.includes(value);
let element = array.indexOf(value);
  if (elementExist === true) {
    console.log(elementExist, element);
  } else {
    console.log(elementExist)
  }
}

finderName(nameFinder, "Bruce");

*/

const finderName = (array, value) => {
let elementExist = array.includes(value);
let element = array.indexOf(value);
elementExist == true ? console.log(elementExist, element) : console.log(elementExist);
}

finderName(nameFinder, "Bruce");



/*----------------------------------------------------------------------------------
-----------------------**Iteration #8: Contador de repeticiones**--------------------
------------------------------------------------------------------------------------*/


/*Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.
Puedes usar este array para probar tu función:


const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];
function repeatCounter(param) {
  // insert code
}
*/

const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];


