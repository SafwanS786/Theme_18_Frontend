import React, { useState } from 'react'
import '../Style/AdminPanel.css'
import AdminImg from "../../public/image.png"
export default function HomePage() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);

        // API Call Here
    };
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

                    <button type="submit" className="Login_Btn">
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}