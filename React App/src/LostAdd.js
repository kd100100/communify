import React, { useState, useEffect } from 'react';
import lost11 from './Lost.svg'
import {Link} from 'react-router-dom'
import backButton from './backButton.svg'
import {db,storage} from './firebase'

function LostAdd() {

    const[date,setDate] = useState();
    const[place,setPlace] = useState();
    const[time,setTime] = useState();
    const[lost1,setLost1] = useState();
    const [logLength, setLogLength] = useState()

    useEffect(() => {
        db.collection("Lost")
         .onSnapshot((querySnapshot) => {
         var documents = [];
         querySnapshot.forEach((doc) => {
             documents.push(doc.data());
         });
         setLogLength(documents.length)
     });
 
     }, [])
 
     function upload(e) {
         e.preventDefault()
         db
         .collection("Lost")
         .doc("log-"+(logLength+1))
         .set({
                 Lost: lost1,
                 Place: place,
                 Time: time,
                 Date: date
             });
 
         document.getElementsByClassName('go-to-home')[0].click()
     }

    return (
        <div className='clean'>
            <Link to='/lost'><img src={backButton} alt='back' className='backButton'/></Link>
            <div className='top__part'>
                <img src={lost11} alt=''/>
                <h3>Add Lost</h3>
            </div>
            <div className='lf_btn_grp'>
                <button className='lf_active'>Lost</button>
                <Link to='/addfound'><button className='lf_notactive'>Found</button></Link>
            </div>
            <div className='class__items'>
                <label className='label' for='item'>Item Lost</label>
                <input value={lost1} onChange={e => setLost1(e.target.value)} type="text" id='item' />
            </div>
            <div className='class__items'>
                <label className='label' for='date'>Date</label>
                <input value={date} onChange={e => setDate(e.target.value)} type="date" id='date' />
            </div>
            <div className='class__items'>
                <label className='label' for='time'>Time</label>
                <input value={time} onChange={e => setTime(e.target.value)} type="time" id='time' />
            </div>
            <div className='class__items'>
                <label className='label' for='place'>Place</label>
                <textarea value={place} onChange={e => setPlace(e.target.value)} type="text" id='place' style={{marginTop: '10px'}} />
                <button onClick={upload} type='submit' className='submit'>Submit</button>
            </div>
            <Link to='/homepage'><button className="go-to-home" style={{display:'none'}}></button></Link>
        </div>
    )
}

export default LostAdd
