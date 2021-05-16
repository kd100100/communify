import React, { useState, useEffect } from 'react';
import trans from './Trans.svg'
import './Cleanliness.css'
import {Link} from 'react-router-dom'
import backButton from './backButton.svg'

function Transport() {

    const [pincode, setPincode] = useState('')

    function search(e){
        e.preventDefault()

        document.getElementsByClassName('trans__routes')[0].style.display = 'none'
        document.getElementsByClassName('trans__routes')[1].style.display = 'none'
        document.getElementsByClassName('trans__routes')[2].style.display = 'none'
        
        if (pincode === '600004' | pincode === '600018' | pincode === '600015' | pincode === '600017' | pincode === '600024' | pincode === '600033'){
            document.getElementsByClassName('trans__routes')[0].style.display = 'block'
        }
        if (pincode === '600080' | pincode === '600124' | pincode === '600056' | pincode === '600095' | pincode === '600107' | pincode === '600093'){
            document.getElementsByClassName('trans__routes')[1].style.display = 'block'
        }
        if (pincode === '601203' | pincode === '600057' | pincode === '600060' | pincode === '600099' | pincode === '600040' | pincode === '600107'){
            document.getElementsByClassName('trans__routes')[2].style.display = 'block'
        }
    }

    return (
        <div className='clean'>
        <Link to='/homepage'><img src={backButton} alt='back' className='backButton'/></Link>
            <div className='top__part'>
                <img src={trans} alt=''/>
                <h3>Transport</h3>
            </div>
            <div className='class__items'>
                <label className='label' >Pinode</label>
                <input value={pincode} onChange={e => setPincode(e.target.value)} className='trans__input' type='number'/>
                <button type='submit' className='submit4' style={{marginTop : '20pxs'}} onClick={search}>Submit</button>
            </div>
            <div style={{height: '30px'}}></div>
            <Link to='/route1'><div className='trans__routes'>
                <div className='trans__routeNumber'>
                    <h3>R1</h3>
                </div>
                <h3 className='trans__routeName'>T.Nagar Route</h3>
            </div></Link>
            <Link to='/route2'><div className='trans__routes'>
                <div className='trans__routeNumber'>
                    <h3>R2</h3>
                </div>
                <h3 className='trans__routeName'>Korattur Route</h3>
            </div></Link>
            <Link to='/route3'><div className='trans__routes'>
                <div className='trans__routeNumber'>
                    <h3>R3</h3>
                </div>
                <h3 className='trans__routeName'>Minjur Route</h3>
            </div></Link>
        </div>
    )
}

export default Transport
