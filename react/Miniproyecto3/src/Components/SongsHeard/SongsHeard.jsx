



const SongsHeard = ({ data }) => {
    
    return (
      <div className="songsHeard">
            <h2>Songs</h2>
        {
          data.map((song, index) => {
            return <p key={index}>{song}</p>
          })
        }
        
      </div>
    );
  };
  
  export default SongsHeard;