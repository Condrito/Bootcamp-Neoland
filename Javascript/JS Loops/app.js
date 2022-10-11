/*----------------------------------------------------------------------------------
--------------------------**Iteración #1: Usa includes**----------------------------
------------------------------------------------------------------------------------*/

/*Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta".
Usa la función .***includes*** de javascript.


const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']
*/

const products = [
  "Camiseta de Pokemon",
  "Pantalón coquinero",
  "Gorra de gansta",
  "Camiseta de Basket",
  "Cinrurón de Orión",
  "AC/DC Camiseta",
];

products.forEach((product) => {
  if (product.includes("Camiseta")) {
    console.log(product);
  }
});

/*----------------------------------------------------------------------------------
--------------------**Iteración #2: Condicionales avanzados**-----------------------
------------------------------------------------------------------------------------*/

/*Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad
 ***isApproved*** a true o false en consecuencia. Una vez lo tengas compruébalo con un ***console.log***. 

( **Mirar abajo en pistas** ).

Puedes usar este array para probar tu función:

const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

to-DO PEDRO 

Para añadir nueva propiedad a un objeto podéis hacerlo de esta forma mas sencilla:

objeto.isApproved =true

donde objeto es el objeto que recorremos (cada alumno en nuestro caso)

isApproved --- es la propiedad queremos definir o modificar 

true ---- es el valor que le asignamos a la propiedad 

---------Ejemplo-----------

colegios = [
    {name: 'Pilarica', Clase1: 100, Clase1: 80, Clase1: 10}, 
		{name: 'Lorica', Clase1: 89, Clase1: 50, Clase1: 40},	
]

 recorremos el array de objetos con un forEach para quedarnos en cada uno
de los elementos

colegios.forEach((colegios)=>{
	//le añadimos la propiedad nueva llamada "pintada" y el valor = true
	colegios.pintada = true;
})

console.log(colegios);

------- CONSOLE--------------

{ name: 'Pilarica', Clase1: 10, pintada: true },
{ name: 'Lorica', Clase1: 40, pintada: true }

**Concepto para ejercicio Iteración#2 ( Sergio ).**

Para poder recorrer un array con objetos deberás, recorrerlo con un array y por cada posición añadir una nueva propiedad a cada objeto.

- Pista: ( para añadir la propiedad dentro del objeto )

//Pista a la hora de recorrer un array y poder meter en el objeto una nueva propiedad
//deberás asignar a ese array por indice una propiedad tal que así

nombreLista[indice].nombrePropiedad = valor;
*/

const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Juan Miranda", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];

alumns.forEach((alumn) => {
  alumn.isApprobed = true;
  for (const isApprobed in alumn) {
    alumn.isApprobed =
      (alumn.T1 && alumn.T2) ||
      (alumn.T1 && alumn.T3) ||
      (alumn.T2 && alumn.T3);
  }
});

console.log(alumns);

/*----------------------------------------------------------------------------------
------------------------**Iteración #3: Probando For...of**-------------------------
------------------------------------------------------------------------------------*/

/*Usa un bucle forof para recorrer todos los destinos del array. Imprime en un ***console.log*** sus valores.

Puedes usar este array:

const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']
*/

const placesToTravel = [
  "Japon",
  "Venecia",
  "Murcia",
  "Santander",
  "Filipinas",
  "Madagascar",
];

for (const destination of placesToTravel) {
  console.log(destination);
}
