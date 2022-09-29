/*----------------------------------------------------------------------------------
-----------------------------Iteración #1: Variables--------------------------------
------------------------------------------------------------------------------------*/


//1.1 Crea una variable llamada myFavoriteHero, asigna el valor Hulk a ella.

let myFavoriteHero = "Hulk";


//1.2 Crea una variable llamada x, asigna el valor 50 a ella.

let x = 50;


//1.3 Crea una variable llamada 'h' con el valor 5 y otra 'y' con el valor 10. 

let h = 5;
let y = 10;


//1.4 Crea una otra variable 'z' y asignale el valor de 'h' + 'y'.

let z = h + y;



/*----------------------------------------------------------------------------------
--------------------**Iteración #2: Variables avanzadas**---------------------------
------------------------------------------------------------------------------------*/

/*1.1 Dado el siguiente javascript, cambia el valor de la propiedad age a 25.
const character = {name: 'Jack Sparrow', age: 10};*/

const character = {name: 'Jack Sparrow', age: 10};

character['age'] = 25;


/*1.2 Declara 3 variables con los nombres y valores siguientes 
	firstName = 'Jon'; 
	lastName = 'Snow'; 
	age = 24; */

    let firstName = 'Jon'; 
	let lastName = 'Snow'; 
	let age = 24;

    /*Muestralos por consola de esta forma: 
	'Soy Jon Snow, tengo 24 años y me gustan los lobos.'*/

    console.log('soy ' + firstName + " " + lastName + ', tengo ' + age + ' y me gustan los lobos.')


/*1.3 Dado el siguiente javascript, imprime con un console.log la suma del precio de
ambos juguetes.
const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};*/

const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};

console.log(toy1[price] + toy2[price]);


    



