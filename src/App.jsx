import { Link, Routes, Route } from "react-router-dom"
import PrivateRoutes from "./PrivateRoutes"
import "./App.css"
import "./api/auth.api"

import HomePage from "./page/HomePage"
import FavoritesPage from "./page/FavoritesPage"
import ListbooksPage from "./page/ListbooksPage"
import LoginPage from "./page/LoginPage"
import BooksPage from "./page/BookPage"
import { useState } from "react"

function App() {
  const [user, setUser] = useState({ isLoggedIn: true })

  const handleLogout = () => {
    setUser({ isLoggedIn: false })
  }

  return (
    <div className='App'>
      {user.isLoggedIn && (
        <header className='App-header'>
          <Link to='/'>Mi libreria</Link>
          <Link to='/books'>Libros</Link>
          <Link to='/favorites'>Favoritos</Link>
          <Link to='/login' onClick={handleLogout}>
            Desconectarme
          </Link>
        </header>
      )}

      <main>
        <Routes>
          <Route element={<PrivateRoutes user={user} />}>
            <Route exact path='/' element={<HomePage />} />
            <Route exact path='/favorites' element={<FavoritesPage />} />
            <Route exact path='/books' element={<ListbooksPage />} />
            <Route exact path='/books/:id' element={<BooksPage />} />
          </Route>
          <Route
            exact
            path='/login'
            element={<LoginPage user={user} setUser={setUser} />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
