import { Link } from 'react-router-dom';
import React, { useState } from 'react';
// import { Link, useNavigate } from "react-router-dom";
import axios  from "axios";
// import Signin from "./Login";

const CreateAcount = () => {

    const [ user , setUser] = useState({
        username: "",
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const {id , value} = e.target   
        setUser(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

     const register = async() => {
        const { username, email, password} = user

        if ( username && email && password){
             await axios.post(
                "http://localhost:4000/user/signup", 
                user
            )
            .then(res => alert(res))
        }else{
            alert("Invaled input")
        };
    }

    return(
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form>
                <div>
                    <label htmlFor="username">
                        Username
                    </label>
                    <input type="username" 
                       className="form-control" 
                       id="username" 
                       aria-describedby="usernameHelp" 
                       placeholder="Enter username"
                       value={user.username}
                       onChange={handleChange}
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputEmail">
                        Email address
                    </label>
                    <input type="email" 
                        className="form-control" 
                        id="email" 
                        aria-describedby="emailHelp" 
                        placeholder="Enter email"
                        value={user.email}
                        onChange={handleChange}
                    />
                    
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword">
                        Password
                    </label>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"
                        value={user.password}
                        onChange={handleChange} 
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword">
                        Confirm Password
                    </label>
                    <input type="password" 
                        className="form-control" 
                        id="confirmPassword" 
                        placeholder="Confirm Password"
                    />
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick={() => register()}
                >
                    Register
                </button>
            </form>
            <p className="my-1">
                Already have an account? <Link to="/signin">Sign In</Link>
            </p>
        </div>
    )
}

export default CreateAcount

