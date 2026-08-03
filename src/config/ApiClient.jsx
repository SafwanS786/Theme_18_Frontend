import React from "react"
import axios from "axios"


export const baseURL = "http://localhost:3003";

const ApiClient = axios.create({
    baseURL,
    headers: {
        // contentType: "application/json"
        "Content-Type": "application/json",
    }
})

export default ApiClient;