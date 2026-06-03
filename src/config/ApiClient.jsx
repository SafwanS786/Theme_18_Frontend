import React from "react"
import axios from "axios"


export const baseURL = "http://localhost:3003";

const ApiClient = axios.create({
    baseURL,
    header: {
        contentType: "application/json"
    }
})

export default ApiClient;