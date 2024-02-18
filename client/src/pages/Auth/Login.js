import React, { useState } from "react";
import Layout from '../../components/Layout/Layout'
import axios from 'axios';
import Toaster from 'react-hot-toast';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from "../../context/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });
      if (res.data.success) {
        Toaster.success(res.data.message);
        //use custome hooks
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        // save data in local storage before redirect the page
        localStorage.setItem('auth', JSON.stringify(res.data));
        // redirect to dashboard
        navigate(location.state || "/")
      } else {
        Toaster.error(res.data.message); 
      }
    } catch (error) {
      console.log(error);
      Toaster.error("Something went wrong...");
    }
  };
  return (
    <Layout>
      <div className="login-container">
        <div className='login-box '>
          <form onSubmit={handleSubmit} >
            <h3>Sign In</h3>
            <div className="mb-3">
              <label>Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                placeholder="Enter email"
                required
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                placeholder="Enter password"
                required
              />
            </div>
            <div className="mb-3">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="forgot-password text-right">
              Forgot <a href="#">password?</a>
            </p>
          </form>
        </div>
      </div>
    </Layout>
  )
};

export default Login
