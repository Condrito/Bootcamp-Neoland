import './read.css'



const Read = ({ data: { title, authorName, authorSurname, dateOfPublication, authorBirthDate, bookImage, otherBooks } }) => {
    return (
      <div className="read card">
        <h2>Libro favorito</h2>
        <p>Titulo: {title}</p>
        <img src={bookImage} alt={title}/>
        <p>Autor: {authorName} {authorSurname}</p>
        <p>Publicado: {dateOfPublication}</p>
        <p>Fecha de nacimiento del autor: {authorBirthDate}</p>
        
  
  
        <h3>Otros libros</h3>
        {otherBooks.map((book, index) => {
          return <p key={index}>{book.info}</p>;
        })}
      </div>
    );
  };
  
  export default Read;
