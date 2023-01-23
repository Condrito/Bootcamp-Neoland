



const Sports=({data})=>{


   
    return(
        <div className="sports card">
    
        <h2>Deportes</h2>
                 {data.map((sport, index) => {
            
               return(
                <div key={index}>
                   <h3>{sport.name}</h3>
                  <p>Campo de juego: {sport.indoor? "Interior" : "Exterior"}</p> 
                   <p >Equipo favorito: {sport.favoriteTeam}</p>
                  </div>
                     )  
                     } )}
    
    
         </div>   
            
        )
}

export default Sports