import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = (props) => {
    //     // Using useState to pass the data for login
    const [credentials, setCredentials] = useState({
        name: "",
        email: "",
        password: "",
    });
    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password } = credentials;
        const response = await fetch(
            "http://localhost:5000/api/auth/createuser",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify({ name, email, password }),
            }
        );
        const json = await response.json();
        console.log(json);
        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem("token", json.authtoken);
            navigate("/");
            props.showAlert("Successfully signed in", "success");
        } else {
            props.showAlert("Invalid details", "danger");
        }
    };

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    return (
        <div className="container my-5">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Name
                    </label>
                    <input
                        type="name"
                        className="form-control"
                        id="name"
                        aria-describedby="emailHelp"
                        onChange={onChange}
                        name="name"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        onChange={onChange}
                        name="email"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        onChange={onChange}
                        name="password"
                        minLength={5}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default SignUp;
