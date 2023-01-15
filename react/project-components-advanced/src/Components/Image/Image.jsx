
import "./Image.css";

const Image =({ image, textAlt, ancho, largo }) => {
    
    
    
    
    
return (
    <img className="image" src={image} alt={textAlt} 
    style={{
        width:ancho,
        height:largo

        
    }}/>

)
}

export default Image;