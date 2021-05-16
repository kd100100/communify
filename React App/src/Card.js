import React from 'react';
import './Card.css';
import { Link, useHistory } from "react-router-dom";
function Card({title,imageUrl}){
    return ( 
        
        <div className='card-container'>
            <img src={imageUrl} alt={title}/>
            <div className='card-content'>
                <div className='card-title'>
                    <h6>{title}</h6>
                </div>            
            </div>
        </div>
        
            
    );
}

 
export default Card;