"use client"

import axios from "axios";
import { useState } from "react";

export default function signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function signup() {
        const response = await axios.post("/api/v1/signup", {
            email,
            password,
        });
        const jwt = response.data.token;
        localStorage.setItem("token", jwt);
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-96 p-8 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                        id="email"
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input
                        id="password"
                        type="password"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button
                    className="w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                    onClick={signup}
                >
                    Sign Up
                </button>
            </div>
        </div>
    );
}
