/*----------------------------------------------------------------------------------
-----------------------**Iteración #2: Modificando el DOM**-------------------------
------------------------------------------------------------------------------------*/

/*Dato el siguiente HTML:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
	<h2 class="fn-insert-here"></h2>
	<p class="fn-remove-me">Eliminame!</p>
  <p>No me elimines!</p>
  <p>No me elimines!</p>
  <p class="fn-remove-me">Eliminame!</p>
  <p>No me elimines!</p>
  <p class="fn-remove-me">Eliminame!</p>
  <p class="fn-remove-me">Eliminame!</p>
  <p>No me elimines!</p>
	<div></div><div></div>
	<div class="fn-insert-here"></div>
  <div class="fn-insert-here"></div>
</body>
</html>*/

//2.1 Inserta dinamicamente en un html un div vacio con javascript.

let newDiv = document.createElement("div");

let cuerpo = document.querySelector("body");

cuerpo.appendChild(newDiv);

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

let newDiv2 = document.createElement("div");
let newP = document.createElement("p");

newDiv2.appendChild(newP);

cuerpo.appendChild(newDiv2);
//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

let newDiv3 = document.createElement("div");
cuerpo.appendChild(newDiv3);

for (let i = 0; i < 6; i++) {
  let parrafo = document.createElement("p");
  newDiv3.appendChild(parrafo);
}

//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

let soyDinamico = document.createElement("p");

let textDinamico = document.createTextNode("Soy dinámico!");

cuerpo.appendChild(soyDinamico);

soyDinamico.appendChild(textDinamico);

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

let wubba = document.querySelector("h2.fn-insert-here");

let textwuba = document.createTextNode("Wubba Lubba dub dub");

wubba.appendChild(textwuba);

/*2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];*/

const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];

let listApps = document.createElement("ul");

cuerpo.appendChild(listApps);

for (const app of apps) {
  let social = document.createElement("li");
  let socialtext = document.createTextNode(app);
  social.appendChild(socialtext);
  listApps.appendChild(social);
}

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

let listRemoved = document.querySelectorAll("p.fn-remove-me");
listRemoved.forEach((element) => {
  cuerpo.removeChild(element);
});

/*2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
	Recuerda que no solo puedes insertar elementos con .appendChild.*/

let voyEnMedio = document.createElement("p");
let voyEnMedioText = document.createTextNode("Voy en medio!");

voyEnMedio.textContent = "voy en medio";

let box1 = document.querySelector("div");

box1.insertAdjacentElement("afterend", voyEnMedio);

//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

let listDiv = document.querySelectorAll("div.fn-insert-here");

for (const box of listDiv) {
  let voyDentroP = document.createElement("p");
  let voyDentroText = document.createTextNode("Voy dentro!");
  voyDentroP.appendChild(voyDentroText);

  box.appendChild(voyDentroP);
}
