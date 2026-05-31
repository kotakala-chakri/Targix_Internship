import { useState } from "react";
import { useNavigate } from "react-router-dom";

import API from "../services/api";
import Navbar from "../components/Navbar";

function Login() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email:"",
        password:""
    });

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try{

            const response = await API.post(
                "/auth/login",
                formData
            );

            const token = response.data.token;

            localStorage.setItem(
                "token",
                token
            );

            alert("Login Successful");

            const payload = JSON.parse(
                atob(token.split(".")[1])
            );

            const email = payload.sub;

            if(email === "admin@gmail.com"){

                navigate("/admin-dashboard");

            }else{

                navigate("/student-dashboard");
            }

            // eslint-disable-next-line no-unused-vars
        }catch(error){

            alert("Invalid Credentials");
        }
    };

    return (

        <div>

            <Navbar />

            <div className="form-container">

                <form onSubmit={handleSubmit}>

                    <h2>Login</h2>

                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        onChange={handleChange}
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        onChange={handleChange}
                    />

                    <button type="submit">
                        Login
                    </button>

                </form>

            </div>

        </div>
    );
}

export default Login;