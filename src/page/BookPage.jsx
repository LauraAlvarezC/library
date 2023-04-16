import React, { useEffect, useState } from "react"

import { useParams } from "react-router-dom"
import Book from "../components/Book/Book"

const BookPage = () => {
  const { id } = useParams()

  const [book, setBook] = useState({})

  useEffect(() => {
    fetch(`http://localhost:5000/books/${id}`)
      .then((res) => res.json())
      .then((books) => setBook(books))
      .catch((error) => console.error(error))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <>{book && <Book book={book} setBook={setBook} />}</>
}

BookPage.defaultProps = {}
export default BookPage
