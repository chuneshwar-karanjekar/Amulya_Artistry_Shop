import React, { useState } from "react";
import Layout from "../../components/Layout";
import axios from "axios";
import { Navigate } from "react-router-dom";
import Toaster from 'react-hot-toast';



const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  

  // form function reload
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/register",{
        name,
        email,
        password,
        phone,
        address,
      });
      if(res && res.data.success){
        Toaster.success(res.data && res.data.message);
        Navigate("/login");
      }else{
        Toaster.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      Toaster.error("Something went wrong...");
    }
};

  return (
    <Layout>
      <section className="vh-800 ">
        <div className="container">
          <div
            className="row justify-content-center align-items-center"
            style={{ height: "70vh" }}
          >
            <div className="col-md-6">
              <div className="card shadow">
                <div className="card-body">
                  <h2 className="text-center mb-4">Register With Amulya</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                        placeholder="Email"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control"
                        placeholder="Password"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="form-control"
                        placeholder="Phone Number"
                        min="10"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="form-control"
                        placeholder="Address"
                        required
                      />
                    </div>
                    <div className="mb-3 form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="termsCheck"
                        required
                      />
                      <label className="form-check-label" htmlFor="termsCheck">
                        I agree to the Terms of service
                      </label>
                    </div>
                    <div className="d-grid">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block"
                      >
                        Register
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Register;
