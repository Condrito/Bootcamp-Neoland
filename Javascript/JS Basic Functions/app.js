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

