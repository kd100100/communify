import React, {useState, useEffect} from 'react'
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
import {Link} from 'react-router-dom'
import backButton from './backButton.svg'
import './XYZ.css'

function FoodPred() {

    const[idly2,setIdly2] = useState();
    const[idly4,setIdly4] = useState();
    const[dosa2,setDosa2] = useState();
    const[dosa4,setDosa4] = useState();
    const[samosa2,setSamosa2] = useState();
    const[samosa4,setSamosa4] = useState();
    const[cutlet2,setCutlet2] = useState();
    const[cutlet4,setCutlet4] = useState();

    useEffect(() => {
        document.title = 'Food Prediction'
    }, [])
//"+idly3[2]+"/"+idly3[1]+"/"+idly3[0]
//"+dosa3[2]+"/"+dosa3[1]+"/"+dosa3[0]
//"+samosa3[2]+"/"+samosa3[1]+"/"+samosa3[0]
//"+cutlet3[2]+"/"+cutlet3[1]+"/"+cutlet3[0]
    function Idly1(){
        var idly3 = idly2.split("-");
        const Http = new XMLHttpRequest();
        const url = "http://127.0.0.1:5000/get_idli/"+idly3[2]+"/"+idly3[1];
        // hour/min/day
        Http.open("GET", url);
        Http.send();
  
        Http.onreadystatechange = (e) => {
          console.log(Http.responseText);
          if(Http.responseText % 2 ==0) setIdly4(Http.responseText)
          else setIdly4(parseInt(Http.responseText) +1)
        }
        document.getElementsByClassName('idlyqty')[0].style.display ='block'
    }

    function Dosa1(){
        var dosa3 = dosa2.split("-");
        const Http = new XMLHttpRequest();
        const url = "http://127.0.0.1:5000/get_dosa/"+dosa3[2]+"/"+dosa3[1];
        // hour/min/day
        Http.open("GET", url);
        Http.send();
  
        Http.onreadystatechange = (e) => {
          console.log(Http.responseText);
          setDosa4(Http.responseText)
        }
        document.getElementsByClassName('dosaqty')[0].style.display ='block'
    }

    function Samosa1(){
        var samosa3 = samosa2.split("-");
        const Http = new XMLHttpRequest();
        const url = "http://127.0.0.1:5000/get_samosa/"+samosa3[2]+"/"+samosa3[1];
        // hour/min/day
        Http.open("GET", url);
        Http.send();
  
        Http.onreadystatechange = (e) => {
          console.log(Http.responseText);
          setSamosa4(Http.responseText)
        }
        document.getElementsByClassName('samosaqty')[0].style.display ='block'
    }

    function Cutlet1(){
        var cutlet3 = cutlet2.split("-");
        const Http = new XMLHttpRequest();
        const url = "http://127.0.0.1:5000/get_cutlet/"+cutlet3[2]+"/"+cutlet3[1];
        // hour/min/day
        Http.open("GET", url);
        Http.send();
  
        Http.onreadystatechange = (e) => {
          console.log(Http.responseText);
          setCutlet4(Http.responseText)
        }
        document.getElementsByClassName('cutletqty')[0].style.display ='block'
    }

    return (
        <div className='clean'>
            <Link to='/homepage'><img src={backButton} alt='back' className='backButton'/></Link>
            <div className='top__part'>
                <img src={food} alt=''/>
                <h3>Food Quantity<br/>Prediction</h3>
            </div>
            <div className='food__cards'>
                <div className='food__card1'>
                    <img src={idly} alt="idly" />
                    <h4>Idly (2pcs)</h4>
                    <input value={idly2} onChange={e => setIdly2(e.target.value)} type="date" className="food__pred__date"/>
                    <button onClick={Idly1} className="food__pred__btn">Prediction</button>
                    <h6 className="idlyqty">Quantity: {idly4}pcs</h6>
                </div>
                <div className='food__card1'>
                    <img src={dosa} alt="dosa" />
                    <h4>Dosa</h4>
                    <input value={dosa2} onChange={e => setDosa2(e.target.value)}type="date" className="food__pred__date"/>
                    <button onClick={Dosa1} className="food__pred__btn">Prediction</button>
                    <h6 className="dosaqty">Quantity: {dosa4}pcs</h6>
                </div>
            </div>
            <div className='food__cards'>
                <div className='food__card1'>
                    <img src={samosa} alt="samosa" />
                    <h4>Samosa</h4>
                    <input value={samosa2} onChange={e => setSamosa2(e.target.value)}type="date" className="food__pred__date"/>
                    <button onClick={Samosa1}className="food__pred__btn">Prediction</button>
                    <h6 className="samosaqty">Quantity: {samosa4}pcs</h6>
                </div>
                <div className='food__card1'>
                    <img src={cutlet} alt="cutlet" />
                    <h4>Cutlet</h4>
                    <input value={cutlet2} onChange={e => setCutlet2(e.target.value)} type="date" className="food__pred__date"/>
                    <button onClick={Cutlet1}className="food__pred__btn">Prediction</button>
                    <h6 className="cutletqty">Quantity: {cutlet4}pcs</h6>
                </div>
            </div>
            {/* <div style={{height: '80px'}}></div> */}
            {/* <div className='class__items'>
                <Link to='/cart'><button type='submit' className='submit2'>Go To Cart</button></Link>
            </div> */}
        </div>
    )
}

export default FoodPred
