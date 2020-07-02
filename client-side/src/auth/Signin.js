import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Layout from '../core/Layout';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


const Signin = () => {
    const [values, setValues] = useState({
        email: 'kurilovsergey15@gmail.com',
        password: 'q92e01kl',
        buttonText: 'Submit'
    })

    const {email, password , buttonText}= values; 

    const handleChange = name => event => {
        // console.log(event.target.value);
        setValues({ ...values, [name]: event.target.value });
    };
    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, buttonText: 'Submitting' });
        axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API}/signin`,
            data: { email, password }
        })
            .then(response => {
                // console.log('SIGNIN SUCCESS', response);
                setValues({ ...values, name: '', email: '', password: '', buttonText: 'Submitted' });


                // save the response(user, token) localstorage/cookie
                toast.success(`Hey ${response.data.user.name}, Welcome back!`);
            })
            .catch(error => {
                // console.log('SIGNIN ERROR', error.response.data);
                setValues({ ...values, buttonText: 'Submit' });
                // toast.error(error.response.data.error);
            });
    };
  
  
    const signinForm = () => (
        <form>
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
      <h1 className="p-5">Signin</h1>
        {signinForm()}
      </div>
    </Layout>
    );
};

export default Signin;
