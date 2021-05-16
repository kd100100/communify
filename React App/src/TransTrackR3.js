import React from 'react'
import './ABC.css'
import dot from './dot.svg'
import {Link} from 'react-router-dom'
import backButton from './backButton.svg'

function TransTrackR3() {
    return (
        <div className="clean">
            <Link to='/transport'><img src={backButton} alt='back' className='backButton'/></Link>
            <h1 className="route__heading">Minjur Route</h1>
            <div className="route">
                <img src={dot} alt=''/>
                <h3>Minjur</h3>
                <h6>Arriving Time: 7.50am</h6>
                <h6>Distance: 45.2kms</h6>
            </div>
            <div className="route">
                <img src={dot} alt=''/>
                <h3>Ennore</h3>
                <h6>Arriving Time: 7.58am</h6>
                <h6>Distance: 25.3kms</h6>
            </div>
            <div className="route">
                <img src={dot} alt=''/>
                <h3>Madhavaram</h3>
                <h6>Arriving Time: 8.08am</h6>
                <h6>Distance: 14.9kms</h6>
            </div>
            <div className="route">
                <img src={dot} alt=''/>
                <h3>Kolathur</h3>
                <h6>Arriving Time: 8.18am</h6>
                <h6>Distance: 12kms</h6>
            </div>
            <div className="route">
                <img src={dot} alt=''/>
                <h3>Thirumangalam</h3>
                <h6>Arriving Time: 8.25am</h6>
                <h6>Distance: 6.5kms</h6>
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

export default TransTrackR3
