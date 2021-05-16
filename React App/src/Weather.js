import React, { useState, useEffect } from 'react';
import weather2 from './weather1.svg'
import {Link} from 'react-router-dom'
import backButton from './backButton.svg'
import sunny from './sunny.svg'
import rainy from './rainy.svg'
import cloudy from './cloudy.svg'

function Weather() {

    const [date, setDate] = useState()
    const [weather, setWeather] = useState();
    const [temp, setTemp] = useState();

    useEffect(() => {
        console.log(date)
    }, [date])

    function weather1(){
        var date1 = date.split("-");
        console.log(date1)
        const Http = new XMLHttpRequest();
        const url =  "http://127.0.0.1:5000/get_weather/"+date1[2]+"/"+date1[1]+"/"+date1[0];
        Http.open("GET", url);
        Http.send();

        Http.onreadystatechange = (e) => {
        console.log(Http.responseText);
        setWeather(Http.responseText)
        };
    }

    function temperature(){
        var date1 = date.split("-");
        console.log(date1)
        const Http = new XMLHttpRequest();
        const url = "http://127.0.0.1:5000/get_temperature/"+date1[2]+"/"+date1[1]+"/"+date1[0];
        Http.open("GET", url);
        Http.send();

        Http.onreadystatechange = (e) => {
        console.log(Http.responseText);
        setTemp(Http.responseText)
        };
    }

    function predict(){
        temperature()
        weather1()
    }

    return (
        <div className='clean'>
            <Link to='/homepage'><img src={backButton} alt='back' className='backButton'/></Link>
            <div className='top__part'>
                <img src={weather2} alt=''/>
                <h3>Weather</h3>
            </div>
            
            <div className='class__items'>
                <label className='label' for='date'>Date</label>
                <input value={date} onChange={e => setDate(e.target.value)} type="date" id='date' />
            </div>

            <div className='class__items'>
                <button onClick={predict} type='submit' className='submit4' style={{marginTop: '20px'}}>Submit</button>
            </div>
            
            
            {weather ? weather=='Sunny' ?
            (<div className="home__temp" style={{height: '60px', marginTop: '60px',  marginBottom: '60px'}}>
                <img src={sunny} alt='' />
                <div className="home__tempDet">
                    <h3>Sunny</h3>
                    <h6>Put on your sunscreens</h6>
                    <h2>{temp ? temp : ''}°C</h2>
                </div>
            </div>)
            : (weather=='Rainy' ?
            (<div className="home__temp" style={{height: '60px', marginTop: '60px',  marginBottom: '60px'}}>
                <img src={rainy} alt='' />
                <div className="home__tempDet">
                    <h3>Rainy</h3>
                    <h6>Dont forget your umberlla</h6>
                    <h2>{temp ? temp : ''}°C</h2>
                </div>
            </div>)
            : (weather=='Cloudy' ?
            (<div className="home__temp" style={{height: '60px', marginTop: '60px',  marginBottom: '60px'}}>
                <img src={cloudy} alt='' />
                <div className="home__tempDet">
                    <h3>Cloudy</h3>
                    <h6>Afraid of getting wet, carry umberlla</h6>
                    <h2>{temp ? temp : ''}°C</h2>
                </div>
            </div>) 
            : '')) : ''}
            <Link to='/homepage'><button className="go-to-home" style={{display:'none'}}></button></Link>
        </div>
    )
}

export default Weather
