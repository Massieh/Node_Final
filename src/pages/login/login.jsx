import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === "admin" && password === "admin") {
            navigate("/shop");
        } else {
            alert("Invalid username or password");
        }
    };

    return (
        <div 
            className="min-vh-100 d-flex flex-column" 
            style={{
                backgroundColor: "rgba(245, 245, 220, 1)",
                padding: "20px", 
                fontSize: "2rem", 
            }}
        >
            <div className="container" style={{ maxWidth: "600px" }}>
                <h2 className="text-center mb-5" style={{ fontSize: "3rem" }}>Software Engineering</h2>
                <h5 className="text-center mb-5" style={{ fontSize: "2rem" }}>
                    Example user<br />
                    username: admin<br />
                    password: admin
                </h5>

                <form onSubmit={handleLogin}>
                    <div className="mb-5">
                        <label htmlFor="username" className="form-label" style={{ fontSize: "2rem" }}>Username:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="form-control"
                            style={{ fontSize: "2rem", padding: "20px" }} 
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="form-label" style={{ fontSize: "2rem" }}>Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="form-control"
                            style={{ fontSize: "2rem", padding: "20px" }} 
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="btn btn-success w-100" 
                        style={{ fontSize: "2.5rem", padding: "20px" }} 
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};
