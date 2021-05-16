import React from 'react'
import './ABC.css'
import dot from './dot.svg'
import {Link} from 'react-router-dom'
import backButton from './backButton.svg'

function TransTrackR1() {
    return (
        <div className="clean">
            <Link to='/transport'><img src={backButton} alt='back' className='backButton'/></Link>
            <h1 className="route__heading">T Nagar Route</h1>
            <div className="route">
                <img src={dot} alt=''/>
                <h3>Mylapore</h3>
                <h6>Arriving Time: 7.50am</h6>
                <h6>Distance: 8.5kms</h6>
            </div>
            <div className="route">
                <img src={dot} alt=''/>
                <h3>Alwarpet</h3>
                <h6>Arriving Time: 7.58am</h6>
                <h6>Distance: 7.5kms</h6>
            </div>
            <div className="route">
                <img src={dot} alt=''/>
                <h3>Saidapet</h3>
                <h6>Arriving Time: 8.08am</h6>
                <h6>Distance: 6.2kms</h6>
            </div>
            <div className="route">
                <img src={dot} alt=''/>
                <h3>T Nagar</h3>
                <h6>Arriving Time: 8.18am</h6>
                <h6>Distance: 4.3kms</h6>
            </div>
            <div className="route">
                <img src={dot} alt=''/>
                <h3>Kodambakkam</h3>
                <h6>Arriving Time: 8.25am</h6>
                <h6>Distance: 1.8kms</h6>
            </div>
            <div className="route llast">
                <img src={dot} alt=''/>
                <h3>Vadapalani</h3>
                <h6>Arriving Time: 8.40am</h6>
                <h6>Distance: 0kms</h6>
            </div>
        </div>
    )
}

export default TransTrackR1
