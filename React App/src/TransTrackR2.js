import React from 'react'
import './ABC.css'
import dot from './dot.svg'
import {Link} from 'react-router-dom'
import backButton from './backButton.svg'

function TransTrackR2() {
    return (
        <div className="clean">
            <Link to='/transport'><img src={backButton} alt='back' className='backButton'/></Link>
            <h1 className="route__heading">Korattur Route</h1>
            <div className="route">
                <img src={dot} alt=''/>
                <h3>Korattur</h3>
                <h6>Arriving Time: 7.50am</h6>
                <h6>Distance: 27kms</h6>
            </div>
            <div className="route">
                <img src={dot} alt=''/>
                <h3>Poonamalle</h3>
                <h6>Arriving Time: 7.58am</h6>
                <h6>Distance: 12kms</h6>
            </div>
            <div className="route">
                <img src={dot} alt=''/>
                <h3>Maduravoyal</h3>
                <h6>Arriving Time: 8.08am</h6>
                <h6>Distance: 10.1kms</h6>
            </div>
            <div className="route">
                <img src={dot} alt=''/>
                <h3>CMBT</h3>
                <h6>Arriving Time: 8.18am</h6>
                <h6>Distance: 6.2kms</h6>
            </div>
            <div className="route">
                <img src={dot} alt=''/>
                <h3>Saligramam</h3>
                <h6>Arriving Time: 8.25am</h6>
                <h6>Distance: 4.3kms</h6>
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

export default TransTrackR2
