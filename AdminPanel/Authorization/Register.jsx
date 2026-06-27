import React, { useState } from "react";
import "../Style/AdminPanel.css";
import ApiClient from "../../src/config/ApiClient";
import { toast } from "react-toastify";

export default function Register({ onSuccess, onCancel }) {
    const [NewData, setNewData] = useState({
        name: "",
        email: "",
        password: "",
    });



    const handleAdd = async (e) => {
        e.preventDefault();
        try {
            const add = await ApiClient.post("/api/register", NewData)
            toast.success("Successfull Registration")
        } catch (err) {
            console.error("Error", err);
            toast.error("Registration Denied")
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

    console.log("DATA", NewData)
    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <div className="modal-header">
                    <h2>Add New Admin</h2>
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

                    <div className="modal-input-group">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            autoComplete="new-password"
                            value={NewData.password}
                            onChange={handleRegChange}
                            required
                        />
                    </div>

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
                            Add Admin
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}