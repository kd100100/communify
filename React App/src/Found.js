import React, {useState, useEffect} from 'react'
import lost from './Lost.svg'
import plus from './plus.svg'
import {Link} from 'react-router-dom'
import backButton from './backButton.svg'
import {db} from './firebase'

function Found(){

    const [found, setFound] = useState()

    useEffect(() => {
        db.collection("Found")
        .onSnapshot((querySnapshot) => {
            var documents = [];
            querySnapshot.forEach((doc) => {
                documents.push(doc.data());
            });
            setFound(documents)
        });
    })

    return (
        <div className='clean'>
            <Link to='/homepage'><img src={backButton} alt='back' className='backButton'/></Link>
            <div className='top__part'>
                <img src={lost} alt=''/>
                <h3>Found Items</h3>
            </div>
            <div className='lf_btn_grp'>
                <Link to='/lost'><button className='lf_notactive1'>Lost</button></Link>
                <button className='lf_active1'>Found</button>
            </div>
            {found ? (found.map((doc, index) => (
            <div className='found__item'>
                <img src={doc.img} alt=''/>
                <div className='cart__itemDet'>
                    <h4>{doc.Found}</h4>
                    <p>{doc.Place}</p>
                    <h4>Found on:</h4>
                    <p>26/04/2021</p>
                </div>
            </div>
            ))) : '' }
            <Link to='/addfound'><img src={plus} alt='' className='found__plus'/></Link>
        </div>
    )
}

export default Found
