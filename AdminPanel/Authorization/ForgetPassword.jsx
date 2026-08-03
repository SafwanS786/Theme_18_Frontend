import React, { useState } from 'react'
import { toast } from 'react-toastify'
import ApiClient from '../../src/config/ApiClient'

export default function ForgetPassword() {
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const res = await ApiClient.post("/api/forget-password", { email })
            toast.success(res.data.message)
            setEmail("")
        } catch (err) {
            toast.error(err.response?.data?.message || "Something went wrong")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="Admin_Login_Container">
            <div className="Admin_Login_Box">
                <h1>Forgot Password</h1>
                <form onSubmit={handleSubmit}>
                    <div className="Input_Group">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Enter your registered email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button className="Login_Btn" type="submit" disabled={loading}>
                        {loading ? "Sending..." : "Send Reset Link"}
                    </button>
                </form>
            </div>
        </div>
    )
}