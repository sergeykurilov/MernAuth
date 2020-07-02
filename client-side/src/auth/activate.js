import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Layout from '../core/Layout';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


const Activate = ({match}) => {
    const [values, setValues] = useState({
        name: '',
        token: '',
        show: true,
    })

    useEffect(() => {
      let token = match.params.token;
    }, [  ])

    const { name, token, show }= values; 


    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, buttonText: 'Submitting' });
        axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API}/signup`,
            data: { token }
        })
            .then(response => {
                // console.log('SIGNUP SUCCESS', response);
                setValues({ ...values, buttonText: 'Submitted' });
                toast.success(response.data.message);
            })
            .catch(error => {
                // console.log('SIGNUP ERROR', error.response.data);
                setValues({ ...values, buttonText: 'Submit' });
                // toast.error(error.response.data.error);
            });
    };
  
  
    const activationLink = () => (
        <div>
        <h1 className="p-5">Hey {name}, Ready to activate your account.</h1>
        <button className="btn btn-outline-primary" onClick={clickSubmit}>Activate Account</button>
        </div>
      )
    
    return(
      
    <Layout>
        <ToastContainer />
      <div className="col-d-6 offset-md-3">
        {activationLink()}
      </div>
    </Layout>
    );
};

export default Activate;
