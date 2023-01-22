



const Movies=({data})=>{
console.log(data)
    return(
    <div className="movies">

    <h2>Audiovisual</h2>
             {data.map((movie, index) => {
        
           return(
            <div key={index}>
               <h3>Titulo: {movie.name}</h3>
               <p >Tipo: {movie.type}</p>
               <p >Genero: {movie.genre}</p>
               <p >Puntuación en filmafinity: {movie.vote}</p>
              </div>
                 )  
                 } )}


     </div>   
        
    )
}

export default Movies