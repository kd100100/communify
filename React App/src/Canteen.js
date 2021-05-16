import React, {useState} from 'react'
import food from './food.svg'
import idly from './idly.png'
import dosa from './dosa.png'
import samosa from './samosa.png'
import cutlet from './cutlet.png'
import vadapav from './vadapav.png'
import pongal from './pongal.png'
import vegbiryani from './vegbiryani.png'
import curdrice from './curdrice.png'
import bisbelebath from './bisbelebath.png'
import vegmeals from './vegmeals.png'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { useStateValue } from "./StateProvider"
import {Link} from 'react-router-dom'
import backButton from './backButton.svg'
import './XYZ.css'

function Canteen() {

    const [{canteen}, dispatch] = useStateValue();

    function addidly(){
        dispatch({  
            type: "ADD_ITEM_CANTEEN_IDLY"
        })
    }
    function removeidly(){
        if(canteen.idlyqty>0){
            dispatch({  
                type: "REMOVE_ITEM_CANTEEN_IDLY"
            })
        }
    }

    function adddosa(){
        dispatch({  
            type: "ADD_ITEM_CANTEEN_DOSA"
        })
    }
    function removedosa(){
        if(canteen.dosaqty>0){
            dispatch({  
                type: "REMOVE_ITEM_CANTEEN_DOSA"
            })
        }
    }

    function addsamosa(){
        dispatch({  
            type: "ADD_ITEM_CANTEEN_SAMOSA"
        })
    }
    function removesamosa(){
        if(canteen.samosaqty>0){
            dispatch({  
                type: "REMOVE_ITEM_CANTEEN_SAMOSA"
            })
        }
    }

    function addcutlet(){
        dispatch({  
            type: "ADD_ITEM_CANTEEN_CUTLET"
        })
    }
    function removecutlet(){
        if(canteen.cutletqty>0){
            dispatch({  
                type: "REMOVE_ITEM_CANTEEN_CUTLET"
            })
        }
    }

    function addvadapav(){
        dispatch({  
            type: "ADD_ITEM_CANTEEN_VADAPAV"
        })
    }
    function removevadapav(){
        if(canteen.vadapavqty>0){
            dispatch({  
                type: "REMOVE_ITEM_CANTEEN_VADAPAV"
            })
        }
    }

    function addpongal(){
        dispatch({  
            type: "ADD_ITEM_CANTEEN_PONGAL"
        })
    }
    function removepongal(){
        if(canteen.pongalqty>0){
            dispatch({  
                type: "REMOVE_ITEM_CANTEEN_PONGAL"
            })
        }
    }

    function addvegbiryani(){
        dispatch({  
            type: "ADD_ITEM_CANTEEN_VEGBIRYANI"
        })
    }
    function removevegbiryani(){
        if(canteen.vegbiryaniqty>0){
            dispatch({  
                type: "REMOVE_ITEM_CANTEEN_VEGBIRYANI"
            })
        }
    }

    function addcurdrice(){
        dispatch({  
            type: "ADD_ITEM_CANTEEN_CURDRICE"
        })
    }
    function removecurdrice(){
        if(canteen.curdriceqty>0){
            dispatch({  
                type: "REMOVE_ITEM_CANTEEN_CURDRICE"
            })
        }
    }

    function addbisbelebath(){
        dispatch({  
            type: "ADD_ITEM_CANTEEN_BISBELEBATH"
        })
    }
    function removebisbelebath(){
        if(canteen.bisbelebathqty>0){
            dispatch({  
                type: "REMOVE_ITEM_CANTEEN_BISBELEBATH"
            })
        }
    }

    function addvegmeals(){
        dispatch({  
            type: "ADD_ITEM_CANTEEN_VEGMEALS"
        })
    }
    function removevegmeals(){
        if(canteen.vegmealsqty>0){
            dispatch({  
                type: "REMOVE_ITEM_CANTEEN_VEGMEALS"
            })
        }
    }

    function openidly(){
        document.getElementsByClassName('popup__bg')[0].style.display = 'block'
    }
    function opendosa(){
        document.getElementsByClassName('popup__bg')[1].style.display = 'block'
    }
    function opensamosa(){
        document.getElementsByClassName('popup__bg')[2].style.display = 'block'
    }
    function opencutlet(){
        document.getElementsByClassName('popup__bg')[3].style.display = 'block'
    }
    function openvadapav(){
        document.getElementsByClassName('popup__bg')[4].style.display = 'block'
    }
    function openpongal(){
        document.getElementsByClassName('popup__bg')[5].style.display = 'block'
    }
    function openvegbiryani(){
        document.getElementsByClassName('popup__bg')[6].style.display = 'block'
    }
    function opencurdrise(){
        document.getElementsByClassName('popup__bg')[7].style.display = 'block'
    }
    function openbisbelebath(){
        document.getElementsByClassName('popup__bg')[8].style.display = 'block'
    }
    function openvegmeals(){
        document.getElementsByClassName('popup__bg')[9].style.display = 'block'
    }

    function closeTabs(){
        document.getElementsByClassName('popup__bg')[0].style.display = 'none'
        document.getElementsByClassName('popup__bg')[1].style.display = 'none'
        document.getElementsByClassName('popup__bg')[2].style.display = 'none'
        document.getElementsByClassName('popup__bg')[3].style.display = 'none'
        document.getElementsByClassName('popup__bg')[4].style.display = 'none'
        document.getElementsByClassName('popup__bg')[5].style.display = 'none'
        document.getElementsByClassName('popup__bg')[6].style.display = 'none'
        document.getElementsByClassName('popup__bg')[7].style.display = 'none'
        document.getElementsByClassName('popup__bg')[8].style.display = 'none'
        document.getElementsByClassName('popup__bg')[9].style.display = 'none'
    }

    return (
        <div className='clean'>
            <Link to='/homepage'><img src={backButton} alt='back' className='backButton'/></Link>
            <div className="popup__bg">
                <div className="popup">
                    <h6 className="close" onClick={closeTabs}>x</h6>
                    <img src={idly} alt='' />
                    <h3>Health Benifit</h3>
                    <p>Idli is light and fills you with energy.</p>
                </div>
            </div>
            <div className="popup__bg">
                <div className="popup">
                    <h6 className="close" onClick={closeTabs}>x</h6>
                    <img src={dosa} alt='' />
                    <h3>Health Benifit</h3>
                    <p>A Good Source of Protein.</p>
                </div>
            </div>
            <div className="popup__bg">
                <div className="popup">
                    <h6 className="close" onClick={closeTabs}>x</h6>
                    <img src={samosa} alt='' />
                    <h3>Snack to hang out with friends</h3>
                    <p></p>
                </div>
            </div>
            <div className="popup__bg">
                <div className="popup">
                    <h6 className="close" onClick={closeTabs}>x</h6>
                    <img src={cutlet} alt='' />
                    <h3>Health Benifit</h3>
                    <p>Super healthy for diabetics, heart.</p>
                </div>
            </div>
            <div className="popup__bg">
                <div className="popup">
                    <h6 className="close" onClick={closeTabs}>x</h6>
                    <img src={vadapav} alt='' />
                    <h3>Health Benifit</h3>
                    <p>It is a sinful pleasure.</p>
                </div>
            </div>
            <div className="popup__bg">
                <div className="popup">
                    <h6 className="close" onClick={closeTabs}>x</h6>
                    <img src={pongal} alt='' />
                    <h3>Health Benifit</h3>
                    <p>No cholesterol and Contains dietary fibre.</p>
                </div>
            </div>
            <div className="popup__bg">
                <div className="popup">
                    <h6 className="close" onClick={closeTabs}>x</h6>
                    <img src={vegbiryani} alt='' />
                    <h3>Health Benifit</h3>
                    <p>Perfect combination of protein, carbohydrates, and fats.</p>
                </div>
            </div>
            <div className="popup__bg">
                <div className="popup">
                    <h6 className="close" onClick={closeTabs}>x</h6>
                    <img src={curdrice} alt='' />
                    <h3>Health Benifit</h3>
                    <p>Curd rice is a good source of protein and potassium.</p>
                </div>
            </div>
            <div className="popup__bg">
                <div className="popup">
                    <h6 className="close" onClick={closeTabs}>x</h6>
                    <img src={bisbelebath} alt='' />
                    <h3>Health Benifit</h3>
                    <p>Bisbelebath is rich in iron and contions less carbohydrates.</p>
                </div>
            </div>
            <div className="popup__bg">
                <div className="popup">
                    <h6 className="close" onClick={closeTabs}>x</h6>
                    <img src={vegmeals} alt='' />
                    <h3>Health Benifit</h3>
                    <p>Reduce your risk of heart disease by lowering cholesterol levels.</p>
                </div>
            </div>

            
            <div className='top__part'>
                <img src={food} alt=''/>
                <h3>Canteen</h3>
            </div>
            <div className='food__cards'>
                <div className='food__card'>
                    <InfoOutlinedIcon className='food__info' onClick={openidly}/>
                    <img src={idly} alt="idly" />
                    <h4>Idly (2pcs)</h4>
                    <h5>₹20</h5>
                    <div className='food__btnGroup'>
                        <div style={{flex: '1'}}></div>
                        <div className='food__minus' onClick={removeidly}>-</div>
                        <div className='food__qty idly__qty'>{canteen.idlyqty /2}</div>
                        <div className='food__add' onClick={addidly}>+</div>
                        <div style={{flex: '1'}}></div>
                        {/* Idli is light and fills you with energy. */}
                    </div>
                </div>
                <div className='food__card'>
                    <InfoOutlinedIcon className='food__info' onClick={opendosa}/>
                    <img src={dosa} alt="dosa" />
                    <h4>Dosa</h4>
                    <h5>₹40</h5>
                    <div className='food__btnGroup'>
                        <div style={{flex: '1'}}></div>
                        <div className='food__minus'onClick={removedosa}>-</div>
                        <div className='food__qty idly__qty'>{canteen.dosaqty /2}</div>
                        <div className='food__add'onClick={adddosa}>+</div>
                        <div style={{flex: '1'}}></div>
                    </div>
                </div>
            </div>
            <div className='food__cards'>
                <div className='food__card'>
                    <InfoOutlinedIcon className='food__info' onClick={opensamosa}/>
                    <img src={samosa} alt="samosa" />
                    <h4>Samosa</h4>
                    <h5>₹10</h5>
                    <div className='food__btnGroup'>
                        <div style={{flex: '1'}}></div>
                        <div className='food__minus' onClick={removesamosa}>-</div>
                        <div className='food__qty idly__qty'>{canteen.samosaqty /2}</div>
                        <div className='food__add' onClick={addsamosa}>+</div>
                        <div style={{flex: '1'}}></div>
                    </div>
                </div>
                <div className='food__card'>
                    <InfoOutlinedIcon className='food__info' onClick={opencutlet}/>
                    <img src={cutlet} alt="cutlet" />
                    <h4>Cutlet</h4>
                    <h5>₹10</h5>
                    <div className='food__btnGroup'>
                        <div style={{flex: '1'}}></div>
                        <div className='food__minus'onClick={removecutlet}>-</div>
                        <div className='food__qty idly__qty'>{canteen.cutletqty /2}</div>
                        <div className='food__add'onClick={addcutlet}>+</div>
                        <div style={{flex: '1'}}></div>
                    </div>
                </div>
            </div>
            <div className='food__cards'>
                <div className='food__card'>
                    <InfoOutlinedIcon className='food__info' onClick={openvadapav}/>
                    <img src={vadapav} alt="vadapav" />
                    <h4>Vadapav</h4>
                    <h5>₹20</h5>
                    <div className='food__btnGroup'>
                        <div style={{flex: '1'}}></div>
                        <div className='food__minus' onClick={removevadapav}>-</div>
                        <div className='food__qty idly__qty'>{canteen.vadapavqty /2}</div>
                        <div className='food__add' onClick={addvadapav}>+</div>
                        <div style={{flex: '1'}}></div>
                    </div>
                </div>
                <div className='food__card'>
                    <InfoOutlinedIcon className='food__info' onClick={openpongal}/>
                    <img src={pongal} alt="pongal" />
                    <h4>Pongal</h4>
                    <h5>₹30</h5>
                    <div className='food__btnGroup'>
                        <div style={{flex: '1'}}></div>
                        <div className='food__minus'onClick={removepongal}>-</div>
                        <div className='food__qty idly__qty'>{canteen.pongalqty /2}</div>
                        <div className='food__add'onClick={addpongal}>+</div>
                        <div style={{flex: '1'}}></div>
                    </div>
                </div>
            </div>
            <div className='food__cards'>
                <div className='food__card'>
                    <InfoOutlinedIcon className='food__info' onClick={openvegbiryani}/>
                    <img src={vegbiryani} alt="vegbiryani" />
                    <h4>Veg Biryani</h4>
                    <h5>₹70</h5>
                    <div className='food__btnGroup'>
                        <div style={{flex: '1'}}></div>
                        <div className='food__minus' onClick={removevegbiryani}>-</div>
                        <div className='food__qty idly__qty'>{canteen.vegbiryaniqty /2}</div>
                        <div className='food__add' onClick={addvegbiryani}>+</div>
                        <div style={{flex: '1'}}></div>
                    </div>
                </div>
                <div className='food__card'>
                    <InfoOutlinedIcon className='food__info' onClick={opencurdrise}/>
                    <img src={curdrice} alt="curdrice" />
                    <h4>Curd Rice</h4>
                    <h5>₹40</h5>
                    <div className='food__btnGroup'>
                        <div style={{flex: '1'}}></div>
                        <div className='food__minus' onClick={removecurdrice}>-</div>
                        <div className='food__qty idly__qty'>{canteen.curdriceqty /2}</div>
                        <div className='food__add' onClick={addcurdrice}>+</div>
                        <div style={{flex: '1'}}></div>
                    </div>
                </div>
            </div>
            <div className='food__cards'>
                <div className='food__card'>
                    <InfoOutlinedIcon className='food__info' onClick={openbisbelebath}/>
                    <img src={bisbelebath} alt="bisbelebath" />
                    <h4>Bisbelebath</h4>
                    <h5>₹60</h5>
                    <div className='food__btnGroup'>
                        <div style={{flex: '1'}}></div>
                        <div className='food__minus' onClick={removebisbelebath}>-</div>
                        <div className='food__qty idly__qty'>{canteen.bisbelebathqty /2}</div>
                        <div className='food__add' onClick={addbisbelebath}>+</div>
                        <div style={{flex: '1'}}></div>
                    </div>
                </div>
                <div className='food__card'>
                    <InfoOutlinedIcon className='food__info' onClick={openvegmeals}/>
                    <img src={vegmeals} alt="vegmeals" />
                    <h4>Veg Meals</h4>
                    <h5>₹90</h5>
                    <div className='food__btnGroup'>
                        <div style={{flex: '1'}}></div>
                        <div className='food__minus'onClick={removevegmeals}>-</div>
                        <div className='food__qty idly__qty'>{canteen.vegmealsqty /2}</div>
                        <div className='food__add'onClick={addvegmeals}>+</div>
                        <div style={{flex: '1'}}></div>
                    </div>
                </div>
            </div>
            <div style={{height: '80px'}}></div>
            <div className='class__items'>
                <Link to='/cart'><button type='submit' className='submit2'>Go To Cart</button></Link>
            </div>
        </div>
    )
}

export default Canteen
