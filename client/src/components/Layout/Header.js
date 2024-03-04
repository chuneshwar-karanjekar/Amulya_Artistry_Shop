import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import { toast } from 'react-hot-toast';
import useCategory from '../../hooks/useCategory';




const Header = () => {
  const [auth, setAuth] = useAuth();
  const categories = useCategory();

  // clear user data and token from local storage
  const handleLogout = () => {
    setAuth({
      ...setAuth,
      user: null,
      token: "",
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

              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" to={"/categories"} data-bs-toggle="dropdown" aria-expanded="false">
                  Category
                </NavLink>
                <ul className="dropdown-menu">
                  {categories?.map((c) => (
                    <li key={c._id}>
                      <Link to={`/product-category/${c.slug}`} className="dropdown-item">
                        {c.name}
                      </Link>
                    </li>
                  ))} 
                </ul>
              </li>

              {/* change login to logout nav link  */}
              {!auth.user ? (
                <>
                  <li className="nav-item">
                    <NavLink to="/register" className="nav-link">Register</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link">Login</NavLink>
                  </li>
                </>
              ) : (
                <>

                  <li className="nav-item dropdown">
                    <NavLink className="nav-link dropdown-toggle" to="#" data-bs-toggle="dropdown" aria-expanded="false">
                      {auth?.user?.name}
                    </NavLink>
                    <ul className="dropdown-menu" >
                      <li>
                        <NavLink to={`/dashboard/${auth?.user?.role === 1 ? 'admin' : 'user'}`} className="dropdown-item">Dashboard</NavLink>
                      </li>
                      <li>
                        <NavLink onClick={handleLogout} to="/login" className="dropdown-item">
                          Logout
                        </NavLink>
                      </li>
                    </ul>
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
