import React, {useState, useEffect} from 'react'
import lost1 from './Lost.svg'
import {Link} from 'react-router-dom'
import backButton from './backButton.svg'
import plus from './plus.svg'
import {db} from './firebase'

function Lost() {

    const [lost, setLost] = useState()

    useEffect(() => {
        db.collection("Lost")
        .onSnapshot((querySnapshot) => {
            var documents = [];
            querySnapshot.forEach((doc) => {
                documents.push(doc.data());
            });
            setLost(documents)
        });
    })

    return (
        <div className='clean'>
            <Link to='/homepage'><img src={backButton} alt='back' className='backButton'/></Link>
            <div className='top__part'>
                <img src={lost1} alt=''/>
                <h3>Lost Items</h3>
            </div>
            <div className='lf_btn_grp'>
                <button className='lf_active'>Lost</button>
                <Link to='/found'><button className='lf_notactive'>Found</button></Link>
            </div>
            {lost ? (lost.map((doc, index) => (
            <div className='lost__item'>
                <h4>{doc.Lost}</h4>
                <p>{doc.Place}</p>
                <h4>Reported:</h4>
                <p>Date: {doc.Date}</p>
                <p>Time: {doc.Time}</p>
            </div>
            ))) : '' }
            <Link to='/addlost'><img src={plus} alt='' className='found__plus'/></Link>
        </div>
    )
}

export default Lost
