/*----------------------------------------------------------------------------------
-------------------**Iteración #1: Interacción con el DOM**-------------------------
------------------------------------------------------------------------------------*/

/*Dado el siguiente HTML:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="exercise-1.js" defer></script>
    <title>Document</title>
</head>
<body>
    <p class="fn-remove-me">Bye bye</p>
		<div data-function="printHere"></div>
</body>
</html>*/

/*1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];*/

const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

let countriesList = document.createElement("ul");
let cuerpo = document.querySelector("body");
cuerpo.appendChild(countriesList);

countries.forEach((country) => {
  let countryLi = document.createElement("li");
  let countryText = document.createTextNode(country);
  countryLi.appendChild(countryText);
  countriesList.appendChild(countryLi);
});

//1.2 Elimina el elemento que tenga la clase .fn-remove-me.

let removeMe = document.querySelector(".fn-remove-me");
cuerpo.removeChild(removeMe);

/*1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];*/

const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];

let printDiv = document.querySelector('[data-function="printHere"]');

let carsList = document.createElement("ul");

printDiv.appendChild(carsList);

cars.forEach((car) => {
  let carElement = document.createElement("li");
  let carText = document.createTextNode(car);
  carsList.appendChild(carElement);
  carElement.appendChild(carText);
});

/*1.4 Crea dinamicamente en el html una lista de div que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
const countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];*/

const countries2 = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

let divList = document.createElement("ul");

for (const country2 of countries2) {
  let listCountry = document.createElement("li");
  let titulo = document.createElement("h4");
  let tituloText = document.createTextNode(country2.title);
  titulo.appendChild(tituloText);
  let photo = document.createElement("img");
  photo.src += country2.imgUrl;
  let boxCountry = document.createElement("div");
  boxCountry.appendChild(titulo);
  boxCountry.appendChild(photo);
  listCountry.appendChild(boxCountry);
  divList.appendChild(listCountry);
}

cuerpo.appendChild(divList);

//1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la lista.

const button = document.createElement("button");
const deleteText = document.createTextNode("Delete");
cuerpo.appendChild(button);
button.appendChild(deleteText);
button.onclick = function () {
  divList.removeChild(divList.lastChild);
};

//1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los elementos de las listas que elimine ese mismo elemento del html.

let divList2 = document.createElement("ul");

for (const country3 of countries2) {
  let listCountry = document.createElement("li");
  let titulo = document.createElement("h4");
  let tituloText = document.createTextNode(country3.title);
  titulo.appendChild(tituloText);
  let photo = document.createElement("img");
  photo.src += country3.imgUrl;
  let boxCountry = document.createElement("div");
  boxCountry.appendChild(titulo);
  boxCountry.appendChild(photo);
  listCountry.appendChild(boxCountry);
  divList2.appendChild(listCountry);

  let button = document.createElement("button");
  let deleteText = document.createTextNode("Delete this");
  boxCountry.appendChild(button);
  button.appendChild(deleteText);
  button.onclick = function () {
    divList2.removeChild(listCountry);
  }
}

cuerpo.appendChild(divList2);
