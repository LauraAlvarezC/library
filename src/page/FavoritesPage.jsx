import React, { useEffect, useState } from "react"
import Favorites from "../components/Favorites/Favorites"

const FavoritesPage = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/books?isInFavorites=true")
      .then((res) => res.json())
      .then((books) => setBooks(books))
      .catch((error) => console.error(error))
  }, [])

  return (
    <div>
      <h1>Mis Favoritos</h1>
      {books && (
        <>
          <Favorites books={books} />
        </>
      )}
    </div>
  )
}

export default FavoritesPage
