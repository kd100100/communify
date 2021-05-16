import React from 'react'
import Logo from './logo1.svg'
import './Welcome.css'
import { Link, useHistory } from "react-router-dom";

function Welcome() {
    return (
        <div className="welcome_container">
            <div className="title_container">
                <div className="line1">WELCOME</div>
                <div className="line2">TO</div>
                <div className="line3">COMMUNIFY</div>
            </div>
            <div className="image_container">
                <img src={Logo} />
            </div>
            <div className="university_name">
                <h1>KEE UNIVERSITY</h1>
            </div>
            <div className="buttons">
               <Link to='/login'><button className="login_b">LOG IN</button></Link>
               <Link to='/register'><button className="register_b">REGISTER</button></Link>
            <br/>
            <svg className='bottom_line' width="141" height="6" viewBox="0 0 141 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M137.927 0.427856H3.07331C1.64106 0.427856 0.47998 1.67522 0.47998 3.21393C0.47998 4.75263 1.64106 6 3.07331 6H137.927C139.359 6 140.52 4.75263 140.52 3.21393C140.52 1.67522 139.359 0.427856 137.927 0.427856Z" fill="black"/>
            </svg>
            </div>

        </div>
    )
}

export default Welcome
