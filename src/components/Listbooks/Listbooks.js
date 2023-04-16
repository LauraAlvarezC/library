import React from "react"
import { Link } from "react-router-dom"
import "./Listbooks.css"

const Listbooks = ({ books }) => (
  <div className='Listbooks'>
    {" "}
    <section className='galeria'>
      {books &&
        books.map((book) => (
          <>
            <div key={book.id} className='imagen'>
              <img src={book.cover} alt={book.title} />
              <div className='book-title'>
                <Link to={`/books/${book.id}`}>Titulo: {book.title}</Link>
              </div>
            </div>
          </>
        ))}
    </section>
  </div>
)
Listbooks.propTypes = {}

Listbooks.defaultProps = {}

export default Listbooks
