import React, {useState} from "react";
import { Link, Redirect } from "react-router-dom";
import Layout from "../core/Layout";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import  "react-toastify/dist/ReactToastify.min.css";


const Signup = () => {
    const [values, setValues] = useState({
        name: 'Sergey',
        email: 'kurilovsergey15@gmail.com',
        password: '1111',
        buttonText: 'Submit'
    })
    const handleChange = (name) => (event) => {
       setValues({...values, [name]:event.target.value})
    //    console.log(event.target.value)
    
    } 
    const clickSubmit = () => {
        //
    }
  
    const {name, email, password , buttonText}= values; 
    const signupForm = () => (
        <form>
            <div className="form-group">
                <lable className="text-muted">Name</lable>
                <input onChange={handleChange('name')} value={name} type="text" className="form-control"/>
            </div>
            <div className="form-group">
                <lable className="text-muted">Email</lable>
                <input onChange={handleChange('email')} value={email} type="email" className="form-control"/>
            </div>
            <div className="form-group">
                <lable className="text-muted">Password</lable>
                <input onChange={handleChange('password')} value={password} type="password" className="form-control"/>
            </div>
            <div>
                <button className="btn btn-primary" onClick={clickSubmit}>{buttonText}</button>
            </div>
        </form>
    )

    return(
      
    <Layout>
        <ToastContainer />
      <div className="col-d-6 offset-md-3">
      <h1 className="p-5">Signup</h1>
        {signupForm()}
      </div>
    </Layout>
    );
};

export default Signup;
