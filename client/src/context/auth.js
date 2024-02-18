import axios from "axios";
import React, { useState, useEffect, useContext, createContext } from "react";

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: ""
  });

  //set default axios
  axios.defaults.headers.common["Authorization"] = auth?.token

  // retrieve authentication data from the local storage and update the authentication state using the setAuth function. 
  useEffect(()=>{
    const data = localStorage.getItem('auth')
    if(data){
        const parseData = JSON.parse(data);
        setAuth({
            ...auth,
            user: parseData.user,
            token:parseData.token,
        });
    }
  },[setAuth])

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

// create a custom hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
