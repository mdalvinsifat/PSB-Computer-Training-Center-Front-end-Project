import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
   const { token, user } = useSelector(state => state.auth)


  if (!token || !user) {
    return <Navigate to="/login" replace />
  }

  
  if (user.role !== 'admin') {
    return <Navigate to="/" replace /> // Redirect normal users to homepage
  }

  return children
}
export default ProtectedRoute
