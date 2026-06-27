import React, { useState } from 'react'
import '../Style/AdminPanel.css'
import AdminImg from "../../public/image.png"
import ApiClient from '../../src/config/ApiClient';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'
export default function Login() {

    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);

        setFormData({
            email: "",
            password: ""
        })

        // API Call Here
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {

            const res = await ApiClient.post("/api/login", formData)

            const msg = res.data.message;
            console.log(res.data);

            if (msg === "Login successful!") {
                toast.success("Successfull Login")
                navigate("/Admin/AdminPage/dashboard")
            }
            setFormData({
                email: "",
                password: ""
            })

        } catch (err) {
            console.error("Error", err);
            toast.error("Login Denied")

        }
    }
    return (
        <div className="Admin_Login_Container" style={{
            backgroundImage: `url(${AdminImg})`,
            width: "100%", height: "100vh", backgroundSize: "cover"
        }}>
            <div className="Admin_Login_Box">
                <h1>Admin Login</h1>

                <form onSubmit={handleSubmit}>
                    <div className="Input_Group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="Input_Group">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter Password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>

                    <button className="Login_Btn" onClick={handleLogin}>
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}
