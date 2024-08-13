import React, { useEffect,useState } from 'react'
import axios from 'axios';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({children}) {

    const [isAuthenticated, setIsAuthenticated] = useState(null);
    useEffect(() => {
        const validateToken = async() => {
            const token = localStorage.getItem('token')
            if(!token){
                setIsAuthenticated(false);
                return ;
            }
            try{
                const response = await axios.post('http://localhost:5000/api/auth/validate-token',{token})
                if (response.data.valid) {
                    setIsAuthenticated(true)
                }
                else{
                    localStorage.removeItem('token')
                    setIsAuthenticated(false);
                }
            }
            catch (e) {
                console.error('Error validating token:',e);
                localStorage.removeItem('token')
                setIsAuthenticated(false)
            }
        }
        validateToken()
    },[])


    if (isAuthenticated === null) {
        return <div>Authenticating...</div>;
    }
  return isAuthenticated ? children : <Navigate to="/login" />
}

export default ProtectedRoute;
