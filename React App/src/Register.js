import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import {auth} from "./firebase"
import firebase from 'firebase';
import Logo from './logo1.svg'
import backButton from './backButton.svg'

function Register() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    
    const updateDet= (e) =>{
            console.log('updating')
            var user = firebase.auth().currentUser;
            user.updateProfile({
                displayName: name,
                photoURL: 'https://ui-avatars.com/api/?name='+name+'&background=090909&color=fff&font-size=0.33'
            }).then(function() {
                console.log('pushing')
                history.push('/homepage')
            }).catch(function(error) {
                alert(error)
            })
    } 

    const register = e =>{
        e.preventDefault();
        

        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            console.log(auth);
            if (auth){
                updateDet()
                // history.push('/')
            }
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className="Login">
        <Link to='/'><img src={backButton} alt='back' className='backButton'/></Link>
            <div className="login__title">
                <p>Register</p>
                <div className='image_container1'>
                    <img src={Logo} alt="KEE University"/>
                </div>
                <div className="university_name1">
                    <h2>KEE UNIVERSITY</h2>
                </div>
                <form>
                    <div className="inputfield11 inputfield1"><input type="text" placeholder=" Name" value={name} onChange={e => setName(e.target.value)}/></div>
                    <div className="inputfield11"><input type="email" placeholder=" Email Address" value={email} onChange={e => setEmail(e.target.value)}/></div>
                    <div className="inputfield11"><input type="password" placeholder=" Password" value={password} onChange={e => setPassword(e.target.value)}/></div>
                    <Link to='/homepage'><button className="submit11 submit1" onClick={register}>REGISTER</button></Link>
                    <Link to='/login'><button className="submit11">LOGIN</button></Link>
                </form>
            </div>
            
        </div>
    )
}

export default Register
