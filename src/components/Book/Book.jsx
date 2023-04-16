import React from "react"
import { useNavigate } from "react-router-dom"
import "./Book.css"

const Book = ({ book, setBook }) => {
  const navigate = useNavigate()
  const addToFavorites = async () => {
    await fetch("http://localhost:5000/books/" + book.id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ isInFavorites: true })
    })

    setBook({ ...book, isInFavorites: true })
  }

  const removeFromFavorites = async () => {
    await fetch("http://localhost:5000/books/" + book.id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ isInFavorites: false })
    })

    setBook({ ...book, isInFavorites: false })
  }

  const goToBooks = (e) => {
    navigate("/books")
  }

  return (
    <div className='book'>
      {book && (
        <>
          <h1>Detalle del libro: {book.title}</h1>
          <h4>Autor: {book.author}</h4>
          <br />

          <div className='cover-image'>
            <img src={book.cover} alt={book.cover} />
          </div>

          <div className='book-actions'>
            {book && <button onClick={goToBooks}>Volver</button>}

            {!book.isInFavorites && (
              <button onClick={addToFavorites}>Añadir a favoritos</button>
            )}

            {book.isInFavorites && (
              <button onClick={removeFromFavorites}>
                Eliminar de favoritos
              </button>
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default Book
