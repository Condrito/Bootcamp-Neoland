/*----------------------------------------------------------------------------------
--------------------------**Iteración #1: Creando Events**--------------------------
------------------------------------------------------------------------------------*/

/*Dado el siguiente HTML:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
	<input class="click" type="text"/>
	<input class="focus" type="text"/>
	<input class="value" type="text"/>
</body>
</html>*/

//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el
//evento click que ejecute un console log con la información del evento del click

let button = document.createElement("button");
button.setAttribute("id", "btnToClick");

let click = document.querySelector(".click");

let cuerpo = document.querySelector("body");
cuerpo.appendChild(button);

button.onclick = function (e) {
  console.log(e);
};

//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

let focusElement = document.querySelector(".focus");

focusElement.onfocus = function () {
  console.log(focusElement.value);
};
//otra forma de hacerlo
focusElement.addEventListener('focus', (event) => {
    console.log(focusElement.value);
    console.log(event);
})

//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

let imputText = document.querySelector('.value');

imputText.addEventListener('input',(event)=> {
    console.log(imputText.value);
})