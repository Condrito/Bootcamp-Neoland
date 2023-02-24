import { useEffect } from "react";

const MessageComponent = () => {


    useEffect(() => {
        console.log('Me monto en el DOM');
      
        return () => {
          console.log('Me desmonto del DOM');
        };
      }, []);
    return <h4>I'm Iron Man</h4>
  
  }

  export default MessageComponent