import React from 'react'
import './Card.css'
import Card from './Card.js'
import logo from './logo1.svg'
import lib from './library.svg'
import Clean from './Cleanliness.svg'
import Trans from './Trans.svg'
import Canteen from './Canteen.svg'
import Lost from './Lost.svg'
import parking from './park.svg'
import { Link, useHistory } from "react-router-dom";
import sunny from './sunny.svg'

function Home() {
    return (
        <div className="clean">
            <div className="home__title">
                <img src={logo} alt="KEE UNIVERSITY" className="home__logo"/>
                <h3>KEE UNIVERSITY</h3>
            </div>
            <div className="home__temp" style={{height: '60px'}}>
                <img src={sunny} alt='' />
                <div className="home__tempDet">
                    <h3>Sunny</h3>
                    <h6>Put on your sunscreens</h6>
                    <h2>31°C</h2>
                    <Link to='/weather'><button>More</button></Link>
                </div>
            </div>
            <div className="container">
            <h2 style={{marginBottom: '5px'}}>Features</h2>
            <div className='home__box'>
                <Link to ='/library'>
                <div className="home__card1">
                    <Card title="Library" imageUrl={lib} />
                </div>
                </Link>
                <Link to ='/cleanliness'>
                <div className="home__card2">
                    <Card title="Maintenance" imageUrl={Clean} />
                </div>
                </Link>
                <Link to ='/transport'>
                <div className="home__card3">
                    <Card title="Transport" imageUrl={Trans} />
                </div>
                </Link>
            </div>
            <div className='home__box'>
                <Link to ='/canteen'>
                <div className="home__card4">
                    <Card title="Canteen" imageUrl={Canteen} />
                </div>
                </Link>
                <Link to ='/lost'>
                <div className="home__card5">
                    <Card title="Lost and found" imageUrl={Lost} />
                </div>
                </Link>
                <Link to ='/parking'>
                <div className="home__card6">
                    <Card title="Parking Availability" imageUrl={parking} />
                </div>
                </Link>
            </div>
            </div>
            <div className="home__address">
                <p className='univ'>KEE University</p>
                <p className="home__line1">No. 10, XYZ Street, YUZ Colony, Chennai.</p>
                <p className="home__line2">Lanline: 044-12345678</p>
                <p className="home__line3">KEE University © 2021</p>
            </div>
        </div>
    )
}

export default Home
