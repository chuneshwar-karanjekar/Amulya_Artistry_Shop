import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Policy from "./pages/Policy.js";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Auth/Login.js";
import Register from "./pages/Auth/Register.js";
import { UserDashboard } from "./pages/user/UserDashboard.js";
import PrivateRoute from "./components/Routes/userRoute.js";
import ForgotPassword from "./pages/Auth/ForgotPassword.js";
import AdminPrivateRoute from "./components/Routes/adminRoute.js";
import AdminDashboard from "./pages/Admin/AdminDashboard.js";
import CreateCategory from "./pages/Admin/CreateCategory.js";
import CreateProduct from "./pages/Admin/CreateProduct.js";
import Users from "./pages/Admin/Users.js";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Private route for user*/}
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<UserDashboard/>} />
        </Route>

        {/* Private Route for Admin */}
        <Route path="/dashboard" element={<AdminPrivateRoute/>}>
          <Route path="admin" element={<AdminDashboard/>}/>
          <Route path="admin/create-category" element={<CreateCategory/>}/>
          <Route path="admin/create-product" element={<CreateProduct/>}/>
          <Route path="admin/users" element={<Users/>}/>
        </Route>

      </Routes>
    </>
  );
}

export default App;
