import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { Button, Card } from "react-bootstrap";
import Mainnav from "../../components/navbar";
import './login.css'



const LoginPage = () => {
    
    const [nerror, setError] = useState();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    const inputRef = useRef(HTMLInputElement);
    const navigation = useNavigate();
    

    

    const onSubmit = async (data) => {
        if (!data.email || !data.password) {
            // toast({
            //   title: "Please Fill all the Feilds",
            //   status: "warning",
            //   duration: 5000,
            //   isClosable: true,
            //   position: "bottom",
            // });
            return;
        }

        console.log(`${data.email} and ${data.password}`);
    }


    return (
        <section>
            <Mainnav />
            <div className="loginarea">
                <div className="container">
                    <Card className="loginCard">
                        <form onSubmit={handleSubmit(onSubmit)} className="regiForm">
                            <input
                                type="email"
                                {...register("email", { required: true })}
                                placeholder="Enter Email"
                            />
                            {errors.email && (
                                <p className="text-danger">This field is required</p>
                            )}
                            <input
                                type="password"
                                {...register("password", { required: true, minLength: 8 })}
                                placeholder="Enter password"
                            />

                            {nerror && <div className="text-danger">{nerror}</div>}
                            <div className="buttonwarp">
                                <Button
                                    style={{ color: "white" }}
                                    type="submit"
                                    className="regiButton navButton"
                                >
                                    Login
                                </Button>
                            </div>
                            <p className="text-center">
                                New User?{" "}
                                <Link
                                    to="/signup"
                                    style={{ textDecoration: "none", color: "#f55839" }}
                                >
                                    Please Sign Up
                                </Link>
                            </p>
                            <p className="text-center">
                                <Link to="/" style={{ textDecoration: "none" }}>
                                    <i className="fas fa-chevron-left"></i> Home
                                </Link>
                            </p>
                        </form>
                    </Card>
                </div>
            </div>
        </section>
    );

}

export default LoginPage;
