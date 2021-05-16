import React, { useState, useEffect } from 'react';
import park1 from './park.svg'
import {Link} from 'react-router-dom'
import backButton from './backButton.svg'

function Parking() {

    const[time,setTime] = useState();
    const[day,setDay] = useState();
    const[park,setPark] = useState();
    const[hour,setHour] = useState(); 
    const[min,setMin] = useState();

    useEffect(() => {
        // setHour(time1[0]);
        // setMin(time1[1]);
    }, [time])

    function parks(){
        var time1 = time.split(":");
        const Http = new XMLHttpRequest();
        const url = "http://127.0.0.1:5000/get_predict/"+time1[0]+"/"+time1[1]+"/"+day+"/";
        // hour/min/day
        Http.open("GET", url);
        Http.send();
  
        Http.onreadystatechange = (e) => {
          console.log(Http.responseText);
          setPark(Http.responseText)
        };
        document.getElementsByClassName('parking__slots')[0].style.display='block'
    }

    return (
        <div className='clean'>
            <Link to='/homepage'><img src={backButton} alt='back' className='backButton'/></Link>
            <div className='top__part'>
                <img src={park1} alt=''/>
                <h3>Parking Slots</h3>
            </div>
            <h4>Enter your ETA</h4>
            <div className='class__items'>
                <label className='label' for='time'>Time</label>
                <input value={time} onChange={e => setTime(e.target.value)}type="time" id='time' min="07:00" max="16:59" />
            </div>
            <div className='class__items'>
                <label className='label' for='day'>Day</label>
                <select value={day} onChange={e => setDay(e.target.value)} id='day' style={{marginBottom: '-10px'}}>
                    <option>Select Your Option</option>
                    <option value="1">Sunday</option>
                    <option value="2">Monday</option>
                    <option value="3">Tuesday</option>
                    <option value="4">Wednesday</option>
                    <option value="5">Thursday</option>
                    <option value="6">Friday</option>
                    <option value="7">Saturday</option>
                </select>
            </div>
            <div className='class__items'>
                <button type='submit' onClick={parks} className='submit4'>Predict Availiblity</button>
            </div>
            <h2 className="parking__slots" style={{display: 'none'}}>Slots Available: {park}/500</h2>
        </div>
    )
}

export default Parking
