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
function findLongestWord(array, ) {
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