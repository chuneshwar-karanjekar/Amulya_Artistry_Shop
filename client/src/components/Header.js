import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import { useAuth } from '../context/auth';
import { toast } from 'react-hot-toast';


const Header = () => {
  const [auth, setAuth] = useAuth();

  // clear user data and token from local storage
  const handleLogout = () =>{
   setAuth({
    ...setAuth,
    user:null,
    token:"",
   });
   localStorage.removeItem("auth");
   toast.success("User Logout Successfully")
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand" ><img src="/assets/amulya-nav.png" /></Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/category" className="nav-link ">Category</NavLink>
              </li>


              {/* change login to logout nav link  */}
             {!auth.user ?(
              <>
               <li className="nav-item">
                <NavLink to="/register" className="nav-link">Register</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/login" className="nav-link">Login</NavLink>
              </li>
              </>
             ):(
              <>
              <li className="nav-item">
                <NavLink onClick={handleLogout} to="/login" className="nav-link">Logout</NavLink>
              </li>
              
              </>
             )}

              <li className="nav-item">
                <NavLink to="/card" className="nav-link">Cart (0)</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Header;
