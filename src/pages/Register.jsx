import React, {useState} from "react";
import {Link, Navigate} from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {URL} from "../components/constants";

const Register = () => {
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [gender, setGender] = useState('')
    // const [image, setImage] = useState('')
    const [redirect, setRedirect] = useState(false)
    const submitHandler = async (e) => {
        e.preventDefault()
        await fetch(URL + "register", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                first_name,
                last_name,
                email,
                password,
                gender,
            })
        });
        setRedirect(true);
    }
    if (redirect) {
        return <Navigate to="/login" replace={true}/>
    }
    return (
        <div className="container">
            <Header/>
            <form className="row my-5 py-5 justify-content-center login">
                <div className="col-4 align-items-center ">
                    <h1>Register</h1>
                    <div className="form-outline mb-4">
                        <input type="text" name="first_name" id="first_name" className="form-control"
                               onChange={e => setFirstName(e.target.value)}/>
                        <label className="form-label" htmlFor="first_name">
                            First Name
                        </label>
                    </div>
                    <div className="form-outline mb-4">
                        <input type="text" name="last_name" id="last_name" className="form-control"
                               onChange={e => setLastName(e.target.value)}/>
                        <label className="form-label" htmlFor="last_name">
                            Last Name
                        </label>
                    </div>
                    <div className="form-outline mb-4">
                        <input type="email" name="email" id="email" className="form-control"
                               onChange={e => setEmail(e.target.value)}/>
                        <label className="form-label" htmlFor="email">
                            Email address
                        </label>
                    </div>

                    <div className="form-outline mb-4">
                        <input type="password" name="password" id="password" className="form-control"
                               onChange={e => setPassword(e.target.value)}/>
                        <label className="form-label" htmlFor="password">
                            Password
                        </label>
                    </div>

                    <div className="form-outline mb-4">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gender" value="male"
                                   onChange={e => setGender(e.target.value)}/>
                            <label className="form-check-label" htmlFor="gender">
                                Male
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gender" value="female"
                                   onChange={e => e.target.value}/>
                            <label className="form-check-label" htmlFor="gender">
                                Female
                            </label>
                        </div>
                    </div>

                    {/*<div className="form-outline mb-4">*/}
                    {/*  <label htmlFor="image" className="form-label">Profile Picture</label>*/}
                    {/*  <input className="form-control" type="file" id="image" name="image" onChange={e => setImage(e.target.value)} />*/}
                    {/*</div>*/}

                    <button
                        type="button"
                        className="btn btn-primary btn-block mb-4 text-center"
                        onClick={submitHandler}
                    >
                        Register
                    </button>

                    <div className="text-center mb-5">
                        <p>
                            Already Have an account? <Link to="/login">Login</Link>
                        </p>
                    </div>
                </div>
            </form>

            <div className="container bottom">
                <Footer/>
            </div>
        </div>
    );
};

export default Register;
