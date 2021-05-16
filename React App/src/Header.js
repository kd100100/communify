import React, {useEffect, useState} from 'react'
import './Header.css'
import topbar from './topbar.svg'

function Header() {

    const [time, setTime] = useState()

    // useEffect(() => {
    //     var today = new Date();
    //     setTime(today.getHours() + ":" + today.getMinutes())
    // }, [])


    function myFunction() {
        var today = new Date();
        var hrs = today.getHours()
        if(hrs<10) hrs = '0'+hrs
        var mins = today.getMinutes()
        if(mins<10) mins = '0'+mins
        setTime(hrs + ":" + mins)
        var myVar = setInterval(changeTime, 5000);
    }

    function changeTime() {
        var today = new Date();
        var hrs = today.getHours()
        if(hrs<10) hrs = '0'+hrs
        var mins = today.getMinutes()
        if(mins<10) mins = '0'+mins
        setTime(hrs + ":" + mins)
    }

    return (
        <div className='header' onLoad={myFunction}>
            <input value={time} />
            <div style={{flex: '1'}}></div>
            <img className='header__rightSide' alt='' src={topbar}/>
        </div>
    )
}
export default Header
