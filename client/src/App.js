import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Policy from "./pages/Policy.js";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Auth/Login.js";
import Register from "./pages/Auth/Register.js";
import { Dashboard } from "./pages/user/Dashboard.js";
import PrivateRoute from "./components/Routes/userRoute.js";
import ForgotPassword from "./pages/Auth/ForgotPassword.js";


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


        {/* make private route */}
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="" element={<Dashboard />} />
        </Route>

      </Routes>
    </>
  );
}

export default App;
