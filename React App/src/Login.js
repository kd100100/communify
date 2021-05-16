import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import {auth} from "./firebase"
import './Login.css'
import Logo from './logo1.svg'
import backButton from './backButton.svg'

function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/homepage')
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className = "Login">
            <Link to='/'><img src={backButton} alt='back' className='backButton'/></Link>
            <div className= "login__title">
                <p>Log In</p>
                <div className='image_container1'>
                    <img src={Logo} alt="KEE University"/>
                </div>
                <div className="university_name1">
                    <h2>KEE UNIVERSITY</h2>
                </div>
                <form>
                    <div className="inputfield inputfield1"><input type="email" placeholder=" Email Address" value={email} onChange={e => setEmail(e.target.value)}/></div>
                    <div className="inputfield"><input type="password" placeholder=" Password" value={password} onChange={e => setPassword(e.target.value)}/></div>
                    <Link to='/homepage'><button className="submit submit1" onClick={signIn}>LOG IN</button></Link>
                    <Link to='/register'><button className="submit">REGISTER</button></Link>
                </form>
            </div> 
        </div>
    )
}

export default Login
