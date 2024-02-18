import React, { useState } from "react";
import Layout from '../../components/Layout/Layout'
import axios from 'axios';
import Toaster from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const [email, setEmail] = useState();
    const [newPassword, setNewPassword] = useState();
    const [answer, setAnswer] = useState();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/api/v1/auth/forgot-password", {
                email,
                newPassword,
                answer,
            });
            if (res && res.data.success) {
                Toaster.success(res.data && res.data.message);
                navigate("/login");
            } else {
                Toaster.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            Toaster.error("Something went wrong...");
        }
    };
    return (
        <Layout title={"Forgot password"}>
            <div className="login-container">
                <div className='login-box '>
                    <form onSubmit={handleSubmit} >
                        <h3>Reset Password</h3>
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
                            <label>Your Secret Answer</label>
                            <input
                                type="text"
                                value={answer}
                                onChange={(e) => setAnswer(e.target.value)}
                                className="form-control"
                                placeholder="What is your NickName ?"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label>New Password</label>
                            <input
                                type="password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className="form-control"
                                placeholder="Enter New password"
                                required
                            />
                        </div>
                        <div className="d-grid">
                            <button type="submit" className="btn btn-primary">
                                Reset Password
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default ForgotPassword