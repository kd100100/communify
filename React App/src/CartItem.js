import React, {useState} from 'react'
import { useStateValue } from "./StateProvider"

function CartItem(props) {
    return (
        <div>
            <div className='cart__item'>
                <img src={props.image} alt=''/>
                <div className='cart__itemDet'>
                    <h1>{props.item}</h1><br/>Qty: {props.qty}
                </div>
                <h2>₹{props.price}</h2>
            </div>
            <hr className='hr'/>
        </div>
    )
}

export default CartItem
