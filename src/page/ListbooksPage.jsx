import React, { useEffect, useState } from "react"
import Listbooks from "../components/Listbooks/Listbooks"

const ListbooksPage = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/books")
      .then((res) => res.json())
      .then((books) => setBooks(books))
      .catch((error) => console.error(error))
  }, [])

  return (
    <div>
      <h1>Mis libros</h1>
      {books && <Listbooks books={books} setBooks={setBooks} />}
    </div>
  )
}

export default ListbooksPage
