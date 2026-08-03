import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'

import '../Style/AdminPanel.css'
import AdminImg from "../../public/image.png"
import ApiClient from '../../src/config/ApiClient';
import Register from './Register';



export default function Login() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const [name, setName] = useState("")

    console.log("Che ke nai", formData)
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        console.log("handleCasdas", formData)

    };
    console.log("Che ke nai handleChange", formData)


    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     console.log(formData);

    //     setFormData({
    //         email: "",
    //         password: ""
    //     })

    //     // API Call Here
    // };
    console.log("Che ke nai c22", formData)

    const handleLogin = async (e) => {
        e.preventDefault();
        try {

            const res = await ApiClient.post("/api/login", formData)

            const msg = res.data.message;
            console.log(msg)
            console.log(res.data);

            const TakeName = res.data.admin.name
            console.log("TTTTTT", TakeName)
            setName(TakeName)

            localStorage.setItem("AdminName", TakeName)
            if (res.status === 200) {
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
            setFormData({
                email: "",
                password: ""
            })
        }
    }
    return (
        <div className="Admin_Login_Container" style={{
            backgroundImage: `url(${AdminImg})`,
            width: "100%", height: "100vh", backgroundSize: "cover"
        }}>
            <div className="Admin_Login_Box">
                <h1>Admin Login</h1>

                <form>
                    {console.log("ahdag", formData.email)}
                    {/* onSubmit={handleSubmit} */}
                    <div className="Input_Group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Email"
                            value={formData.email}
                            onChange={handleChange}

                        />
                        {console.log("ahdag", formData.email)}
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
                    <button className="Register_btn" onClick={() => navigate("/Register")}>
                        Register
                    </button>
                </form>
            </div>
        </div>
    )
}
