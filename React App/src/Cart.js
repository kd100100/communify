import React, {useState, useEffect} from 'react'
import './Cleanliness.css'
import cart from './cart.svg'
import {Link} from 'react-router-dom'
import backButton from './backButton.svg'
import CartItem from './CartItem.js'
import { useStateValue } from "./StateProvider"

function Cart() {

    const [itemsFinal, setItemsFinal] = useState()
    const[{canteen}, dispatch] = useStateValue();
    const [total, setTotal] = useState(0)

    useEffect(() => {
        var items = []
        var price = 0
        if(canteen.idlyqty !=0){
            items.push({item: 'Idly', qty: canteen.idlyqty/2, price: canteen.idlyqty*20/2, image: 'https://firebasestorage.googleapis.com/v0/b/hackathon-313610.appspot.com/o/images%2Fidly.png?alt=media&token=9d7f96c2-27e0-4bd0-a932-cd55a4798a7b'})
            price = price + canteen.idlyqty*20/2
        }
        if(canteen.dosaqty !=0){
            items.push({item: 'Dosa', qty: canteen.dosaqty/2, price: canteen.dosaqty*40/2, image: 'https://firebasestorage.googleapis.com/v0/b/hackathon-313610.appspot.com/o/images%2Fdosa.png?alt=media&token=d628f590-d0e0-4a54-8367-2fbc84116a61'})
            price = price + canteen.dosaqty*40/2
        }
        if(canteen.samosaqty !=0){
            items.push({item: 'Samosa', qty: canteen.samosaqty/2, price: canteen.samosaqty*10/2, image: 'https://firebasestorage.googleapis.com/v0/b/hackathon-313610.appspot.com/o/images%2Fsamosa.png?alt=media&token=deaea74b-9971-4161-a2dd-c31bd1c6ffce'})
            price = price + canteen.samosaqty*10/2
        }
        if(canteen.cutletqty !=0){
            items.push({item: 'Cutlet', qty: canteen.cutletqty/2, price: canteen.cutletqty*10/2, image: 'https://firebasestorage.googleapis.com/v0/b/hackathon-313610.appspot.com/o/images%2Fcutlet.png?alt=media&token=e159c110-8de6-40fb-b44a-0123045fb99b'})
            price = price + canteen.cutletqty*10/2
        }
        if(canteen.vadapavqty !=0){
            items.push({item: 'Vada Pav', qty: canteen.vadapavqty/2, price: canteen.vadapavqty*20/2, image: 'https://firebasestorage.googleapis.com/v0/b/hackathon-313610.appspot.com/o/images%2Fvadapav.png?alt=media&token=d1fc6312-eda8-4a07-95e9-c848db1db688'})
            price = price + canteen.vadapavqty*20/2
        }
        if(canteen.pongalqty !=0){
            items.push({item: 'Pongal', qty: canteen.pongalqty/2, price: canteen.pongalqty*30/2, image: 'https://firebasestorage.googleapis.com/v0/b/hackathon-313610.appspot.com/o/images%2Fpongal.png?alt=media&token=979f41a8-6cf8-47c7-85be-18d6782c2d66'})
            price = price + canteen.pongalqty*30/2
        }
        if(canteen.vegbiryaniqty !=0){
            items.push({item: 'Veg Biryani', qty: canteen.vegbiryaniqty/2, price: canteen.vegbiryaniqty*70/2, image: 'https://firebasestorage.googleapis.com/v0/b/hackathon-313610.appspot.com/o/images%2Fvegbiryani.png?alt=media&token=e8d2c00f-dd5b-4cc4-aa1b-14469a4a5492'})
            price = price + canteen.vegbiryaniqty*70/2
        }
        if(canteen.curdriceqty !=0){
            items.push({item: 'Curd Rice', qty: canteen.curdriceqty/2, price: canteen.curdriceqty*40/2, image: 'https://firebasestorage.googleapis.com/v0/b/hackathon-313610.appspot.com/o/images%2Fcurdrice.png?alt=media&token=ef6aae1a-93ea-421b-8ecf-20e193a43ae4'})
            price = price + canteen.curdriceqty*40/2
        }
        if(canteen.bisbelebathqty !=0){
            items.push({item: 'Bisbelebath', qty: canteen.bisbelebathqty/2, price: canteen.bisbelebathqty*60/2, image: 'https://firebasestorage.googleapis.com/v0/b/hackathon-313610.appspot.com/o/images%2Fbisbelebath.png?alt=media&token=63cb780c-ac9d-4fb7-8d10-01e430ab8018'})
            price = price + canteen.bisbelebathqty*60/2
        }
        if(canteen.vegmealsqty !=0){
            items.push({item: 'Veg Meals', qty: canteen.vegmealsqty/2, price: canteen.vegmealsqty*90/2, image: 'https://firebasestorage.googleapis.com/v0/b/hackathon-313610.appspot.com/o/images%2Fvegmeals.png?alt=media&token=c0db8390-4e95-4e27-b2c3-6e6d61bd2b06'})
            price = price + canteen.vegmealsqty*90/2
        }
        setItemsFinal(items)
        setTotal(price)
    }, [canteen])

    useEffect(() => {
        console.log(itemsFinal)
    }, [itemsFinal])


    return (
        <div className='clean'>
            <Link to='/canteen'><img src={backButton} alt='back' className='backButton'/></Link>
            <div className='top__part'>
                <img src={cart} alt=''/>
                <h3>Cart</h3>
            </div>
            {itemsFinal ? (itemsFinal.map((doc, index) => (
                <CartItem key={index} item={doc.item} image={doc.image} qty={doc.qty} price={doc.price} />
            ))) : ''}
            <h3 className='cart__total'>Total Amount: ₹{total}</h3>
            <div style={{height: '80px'}}></div>
            <div className='class__items'>
                <Link to='/ordersuccess'><button type='submit' className='submit2'>Place Order</button></Link>
            </div>
        </div>
    )
}

export default Cart