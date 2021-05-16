import React, { useState, useEffect } from 'react'
import clean from './Cleanliness.svg'
import './Cleanliness.css'
import {db,storage} from './firebase'
import {Link} from 'react-router-dom'
import backButton from './backButton.svg'

function Maintainence() {

    const[maintain, setMaintain] = useState();

    useEffect(() => {
        db.collection("cleanliness")
        .onSnapshot((querySnapshot) => {
            var documents = [];
            querySnapshot.forEach((doc) => {
                documents.push(doc.data());
            });
            setMaintain(documents)
        });
    }, [])

    function delete__main(index){
        db.collection("cleanliness").doc("log-"+index).delete().then(() => {
            console.log("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }

    return (
        <div className='clean'>
            <Link to='/homepage'><img src={backButton} alt='back' className='backButton'/></Link>
            <div className='top__part'>
                <img src={clean} alt=''/>
                <h3>Maintainence Reports</h3>
            </div>
            {maintain ? maintain.map((doc, index) => (
            <div className='found__item1'>
                <img src={doc.img} alt=''/>
                <div className='cart__itemDet'>
                    <h4>{doc.location}</h4>
                    <p>{doc.prob}</p>
                    <h4>Reported on: {doc.date}</h4>
                    {/* <p></p> */}
                    <button className='btn__main btn__main1'>Dismiss</button><button className='btn__main btn__main2'>Resolved</button>
                </div>
            </div>)) : ''}
        </div>
    )
}

export default Maintainence
