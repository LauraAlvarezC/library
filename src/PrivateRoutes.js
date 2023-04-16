import { Outlet, Navigate } from "react-router-dom"

const PrivateRoutes = ({ user }) => {
  const { isLoggedIn } = user
  return isLoggedIn ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateRoutes
