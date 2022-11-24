# Fuentes en línea

**Introducción**

---

Edita el fichero de estilos para aplicarle .myTitle una fuente diferente. Estas fuentes las podemos obtener de Google Fonts.

**Autoevaluación**

---

- Escoger una fuente de Google Fonts.
- Aplicar el font-family correspondiente a la clase .myTitle.

**Html code**

<html>
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width" />

		<!-- Añadir la línea correspondiente -->

		<link rel="stylesheet" type="text/css" href="./styles.css" />
		<title>Fuentes en linea</title>
	</head>
	<body>
		<h1 class="myTitle">Mi nueva fuente</h1>
	</body>
</html>

**Css code**

.myTitle {
	/* Añadir font-family */
}
-------------------------------------------------------------------------------------------------------------------------------


Solution


**Html code**

<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" type="text/css" href="./styles.css" />
		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=Anek+Telugu:wght@300;400;700&display=swap" rel="stylesheet">
		<title>Fuentes en línea</title>
	</head>

	<body>
		<h1 class="myTitle">Mi nueva fuente</h1>
	</body>
</html>


**Css code**
.myTitle {
	font-family: "Anek Telugu", sans-serif;
}