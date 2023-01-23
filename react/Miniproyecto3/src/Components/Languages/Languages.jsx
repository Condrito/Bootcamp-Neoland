




const Languages=({data})=>{


    return(
        <div className="languages card">
    
        <h2>Idiomas</h2>
                 {data.map((language, index) => {
            
               return(
                <div key={index}>
                   <h3>{language.language}</h3>
                   <p >Nivel escrito: {language.wrlevel}</p>
                   <p >Nivel hablado: {language.splevel}</p>
                  </div>
                     )  
                     } )}
    
    
         </div>   
            
        )
}

export default Languages