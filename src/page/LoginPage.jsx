import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

import { login } from "../api/auth.api"

const LoginPage = ({ user, setUser }) => {
  const navigate = useNavigate()
  const [userLoginData, setUserLoginData] = useState({ email: "", pass: "" })
  const [loginAlert, setLoginAlert] = useState("")

  function onLogin(e) {
    e.preventDefault()
    const user = login(userLoginData.email, userLoginData.pass)

    if (user) {
      //login correcto
      alert("LOGIN CORRECTO")
      setLoginAlert("")
      setUser({ isLoggedIn: true })
      navigate("/books")
    } else {
      //login incorrecto,limpio el formulario
      setUserLoginData({ email: "", pass: "" })
      setLoginAlert("Login incorrecto")
    }
  }

  return (
    <div className='LoginPage'>
      <span style={{ color: "red" }}>{loginAlert}</span>
      <form onSubmit={onLogin}>
        <fieldset>
          <legend>email</legend>
          <input
            value={userLoginData.email}
            onChange={(e) =>
              setUserLoginData({ ...userLoginData, email: e.target.value })
            }
            placeholder='email'
          />
        </fieldset>
        <fieldset>
          <legend>password</legend>
          <input
            value={userLoginData.pass}
            onChange={(e) =>
              setUserLoginData({ ...userLoginData, pass: e.target.value })
            }
            placeholder='password'
            type='password'
          />
        </fieldset>
        <button>login</button>
      </form>
    </div>
  )
}
LoginPage.propTypes = {}

LoginPage.defaultProps = {}

export default LoginPage
