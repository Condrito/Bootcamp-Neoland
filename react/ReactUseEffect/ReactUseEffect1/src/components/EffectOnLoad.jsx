

import { useState, useEffect } from "react";


const EffectOnLoad= () => {
  const [myName, setMyName] = useState("David");

  useEffect(() => {
    
    setTimeout(() => {
      setMyName("Ziggy Stardust");
    }, 1500);
  }, []);

  return (
    <>
      <h4>{myName}</h4>
      <input
        type="text"
        value={myName}
        onChange={(e) => setMyName(e.target.value)}
      />
    </>
  );
};

export default EffectOnLoad