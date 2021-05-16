import React from 'react'
import success from './ordersuccess.svg'
import {Link} from 'react-router-dom'

function OrderSuccess() {
    return (
        <div>
            <div className="order">
                <img src={success} alt="" />
                <h3>Order Placed Successfully!</h3>
                <h2>Order ID: 102</h2>
            </div>
            <div className='left__box'>
                <h3>This Week,</h3>
                <p>Total Food Served &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 108.4 kg</p>
                <p>Total Food Wasted &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 16.7 kg</p>
                <p>How many meals<br/>could have been fed&nbsp;&nbsp;&nbsp;&nbsp;: 952 meals</p>
            </div>
            <div className='class__items'>
                <Link to='/homepage'><button type='submit3' className='submit'>Go to Home</button></Link>
            </div>
        </div>
    )
}

export default OrderSuccess
