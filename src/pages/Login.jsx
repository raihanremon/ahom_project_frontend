import React, {useState} from "react";
import {Link, Navigate} from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {URL} from "../components/constants"
import Cookies from 'js-cookie'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)

    const submitHandler = async (e) => {
        e.preventDefault()
        await fetch(URL + "login", {
            method: "POST",
            mode: "no-cors",
            xhrFields: {"withCredentials": true},
            credentials: "include",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password
            }),
        }).then(() => {
            const cookie = Cookies.get("JWT");
            console.log(cookie);
            if (cookie) {
                setRedirect(true);
            } else {
                alert("wrong email or password");
            }
        })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    if (redirect) {
        return <Navigate to="/dashboard" replace={true}/>
    }
    return (
        <div className="container">
            <Header/>
            <form className="row my-5 py-5 justify-content-center login">
                <div className="col-4 align-items-center ">
                    <h1>Login</h1>

                    <div className="form-outline mb-4">
                        <input type="email" id="email" className="form-control"
                               onChange={e => setEmail(e.target.value)}/>
                        <label className="form-label" htmlFor="email">
                            Email address
                        </label>
                    </div>

                    <div className="form-outline mb-4">
                        <input type="password" id="password" className="form-control"
                               onChange={e => setPassword(e.target.value)}/>
                        <label className="form-label" htmlFor="password">
                            Password
                        </label>
                    </div>

                    <button
                        type="button"
                        className="btn btn-primary btn-block mb-4 text-center" onClick={submitHandler}>
                        Sign in
                    </button>
                    <div className="text-center">
                        <p>
                            Not a member? <Link to="/register">Register</Link>
                        </p>
                    </div>
                </div>
            </form>

            <div className="container fixed-bottom">
                <Footer/>
            </div>
        </div>
    );
};

export default Login;
