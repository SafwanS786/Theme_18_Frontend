import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'
import { EyeOff, Eye } from "lucide-react"
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
    const [showPsd, setShowPsd] = useState(false)

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

            const Send_Token = res.data.token
            console.log("SEND", Send_Token)

            localStorage.setItem("Token", Send_Token)

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
                        <div className='password-box'>
                            <input
                                type={showPsd ? "text" : "password"}
                                name="password"
                                placeholder="Enter Password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            <button
                                type="button"
                                className="eye-btn"
                                onClick={() => setShowPsd(prev => !prev)}>
                                {showPsd ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </div>

                    <button className="Login_Btn" onClick={handleLogin}>
                        Login
                    </button>
                    {/* <button className="Register_btn" onClick={() => navigate("/Register")}>
                        Register
                    </button> */}
                    <button className="Forget_Psd" onClick={() => navigate("/forget-password")}>
                        Forget-Password
                    </button>
                </form>
            </div>
        </div>
    )
}
