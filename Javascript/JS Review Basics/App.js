/*----------------------------------------------------------------------------------
---------------------**Iteración #1: Mix for e includes**---------------------------
------------------------------------------------------------------------------------*/

/*Dado el siguiente javascript usa forof para recorrer el array de películas,
genera un nuevo array con las categorías de las películas e imprime por consola el array de categorías.
Ten en cuenta que las categorías no deberían repetirse. Para filtrar las categorías puedes ayudarte de la función **.includes()**

const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]
*/

const movies = [
  { title: "Madaraspar", duration: 192, categories: ["comedia", "aventura"] },
  { title: "Spiderpan", duration: 122, categories: ["aventura", "acción"] },
  {
    title: "Solo en Whatsapp",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "El gato con guantes",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];

let listCategories = [];
let listCategoriesWithoutDuplicates = [];

for (const movie of movies) {
  listCategories.push(movie.categories);
}
listCategories = listCategories.flat();

for (const categorie of listCategories) {
  if (!listCategoriesWithoutDuplicates.includes(categorie)) {
    listCategoriesWithoutDuplicates.push(categorie);
  }
}
console.log(listCategoriesWithoutDuplicates);

/*----------------------------------------------------------------------------------
----------------------------**Iteración #2: Mix Fors**------------------------------
------------------------------------------------------------------------------------*/

/*Dado el siguiente javascript usa forof y forin para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios.

const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]
*/

const users = [
  {
    name: "Manolo el del bombo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Mortadelo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Super Lopez",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "El culebra",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

let volumeList = [];

for (const user of users) {
  for (const key in user.favoritesSounds) {
    const element = user.favoritesSounds[key].volume;
    volumeList.push(element);
  }
}
console.log(volumeList);

let totalVolume = 0;

for (const volume of volumeList) {
  totalVolume += volume;
}

let averageVolume = totalVolume / volumeList.length;
console.log(averageVolume);


/*----------------------------------------------------------------------------------
----------------------------**Iteración #3: Mix Fors**------------------------------
------------------------------------------------------------------------------------*/

/*Dado el siguiente javascript usa forof y forin para saber cuantas veces ha sido cada sonido agregado por los usuarios a favorito. 
Para ello recorre la lista de usuarios y usa forin para recoger el nombre de los sonidos que el usuario tenga como favoritos.
Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada vez que ese sonido se repita como favorito en cada usuario.

Este ejercicio es un poco complicado con los conocimientos actuales pero...a la vez un buen reto y oportunidad para comprender que hay muchas 
formas de hacer las cosas en javascript.


const users2 = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]
*/

const users2 = [
  {name: 'Manolo el del bombo',
      favoritesSounds: {
          waves: {format: 'mp3', volume: 50},
          rain: {format: 'ogg', volume: 60},
          firecamp: {format: 'mp3', volume: 80},
      }
  },
  {name: 'Mortadelo',
      favoritesSounds: {
          waves: {format: 'mp3', volume: 30},
          shower: {format: 'ogg', volume: 55},
          train: {format: 'mp3', volume: 60},
      }
  },
  {name: 'Super Lopez',
      favoritesSounds: {
          shower: {format: 'mp3', volume: 50},
          train: {format: 'ogg', volume: 60},
          firecamp: {format: 'mp3', volume: 80},
      }
  },
  {name: 'El culebra',
      favoritesSounds: {
          waves: {format: 'mp3', volume: 67},
          wind: {format: 'ogg', volume: 35},
          firecamp: {format: 'mp3', volume: 60},
      }
  },
];

let favoritesSoundsList = [];


for (const user of users2) {
  for (const key in user.favoritesSounds) {
    
    favoritesSoundsList.push(key);
  }
}

console.log(favoritesSoundsList);

let counter = 0;
let favoritesSoundsCounter = [];

favoritesSoundsList.forEach ((sound) =>{
  counter = 0;

  favoritesSoundsList.forEach ((repeatElement) =>{
    if (sound == repeatElement) counter++;})

    favoritesSoundsCounter.push(sound+" "+counter)
});
let favoritesSoundsCounterWithoutDuplicates =[];
favoritesSoundsCounter.forEach ((sound)=>{
if (!favoritesSoundsCounterWithoutDuplicates.includes(sound)){
  favoritesSoundsCounterWithoutDuplicates.push(sound);
}
})
console.log(favoritesSoundsCounterWithoutDuplicates);