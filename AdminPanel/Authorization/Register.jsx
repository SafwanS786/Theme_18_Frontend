import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { EyeOff, Eye } from "lucide-react"

import "../Style/AdminPanel.css";
import ApiClient from "../../src/config/ApiClient";

export default function Register({ editUser, OpenEdit, onCancel, onClose, GetAdmin }) {
    const [NewData, setNewData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [showpsd, setShowPsd] = useState(false)

    const handleShowPsd = () => {
        setShowPsd((prev) => !prev)
    }

    useEffect(() => {
        if (editUser) {
            setNewData({
                name: editUser.name,
                email: editUser.email,
                password: ""
            });
        }
    }, [editUser])
    const handleAdd = async (e) => {
        e.preventDefault();

        if (OpenEdit) {
            console.log("editUser", editUser)
            await ApiClient.patch(
                `/api/login/${editUser._id}`,
                NewData
            );
            setNewData({
                name: "",
                email: "",
            });
            onClose()
            toast.success("Admin Updated");
            await GetAdmin()
        } else {

            try {
                const add = await ApiClient.post("/api/register", NewData)
                toast.success("Successfull Registration")
                setNewData({
                    name: "",
                    email: "",
                    password: "",
                })
                onClose()
                await GetAdmin()
            } catch (err) {
                console.error("Error", err);
                toast.error("Registration Denied")

            }

        }
    }
    const handleRegChange = (e) => {
        setNewData({
            ...NewData,
            [e.target.name]: e.target.value,
        });
    };

    const handleRegister = (e) => {
        e.preventDefault();

        console.log("User registered:", NewData);

        if (onSuccess) {
            onSuccess(NewData);
        }
        setNewData({
            name: "",
            email: "",
            password: "",
        });
    };

    // console.log("DATA", NewData)
    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <div className="modal-header">
                    <h2>{OpenEdit ? "Edit Admin" : "Add New Admin"}</h2>
                    <button className="close-btn" onClick={onCancel}>
                        ✕
                    </button>
                </div>

                <p className="modal-subtitle">
                    Create a new administrator account
                </p>

                <form onSubmit={handleAdd}>
                    <div className="modal-input-group">
                        <label>Full Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter full name"
                            autoComplete="off"
                            value={NewData.name}
                            onChange={handleRegChange}
                            required
                        />
                    </div>

                    <div className="modal-input-group">
                        <label>Email Address</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter email address"
                            autoComplete="new-email"
                            value={NewData.email}
                            onChange={handleRegChange}
                            required
                        />
                    </div>
                    {!OpenEdit && (
                        <>
                            <div className="modal-input-group">
                                <label>Password</label>
                                <div className="password-box">
                                    <input
                                        type={showpsd ? "text" : "password"}
                                        name="password"
                                        placeholder="Enter password"
                                        autoComplete="new-password"
                                        value={NewData.password}
                                        onChange={handleRegChange}
                                        required
                                    />

                                    <button
                                        type="button"
                                        className="eye-btn"
                                        onClick={handleShowPsd}
                                    >{showpsd ? <EyeOff size={18} /> : <Eye size={18} />}</button>
                                </div>
                            </div>
                        </>
                    )}

                    <div className="modal-buttons">
                        <button
                            type="button"
                            className="modal-btn-cancel"
                            onClick={onCancel}
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="modal-btn-submit"
                            onClick={() => handleAdd()}
                        >
                            {OpenEdit ? "Update Admin" : "Add Admin"}
                        </button>
                    </div>
                </form>
            </div >
        </div >
    );
}