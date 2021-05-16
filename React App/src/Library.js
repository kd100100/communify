import React, { useState, useEffect } from 'react';
import library from './library.svg'
import backButton from './backButton.svg'
import {Link} from 'react-router-dom'
import {db,storage} from './firebase'

function Library() {

    const [bookname, setBookname] = useState('')
    const [details, setDetails] = useState()
    

    function search(e) {
        e.preventDefault()
        console.log('a')
        db.collection("library").where("name", "==", bookname)
        .onSnapshot((querySnapshot) => {
            var documents = [];
            querySnapshot.forEach((doc) => {
                documents.push(doc.data());
            });
            setDetails(documents[0])
        });
    }

    useEffect(() => {
        if(details){
            if(details.available === "1") {
                document.getElementsByClassName('library__result')[0].style.display = 'block'
                document.getElementsByClassName('library__result')[1].style.display = 'none'
            }
            else {
                document.getElementsByClassName('library__result')[0].style.display = 'none'
                document.getElementsByClassName('library__result')[1].style.display = 'block'
            }
        }
    }, [details])

    return (
        <div className='clean'>
            <Link to='/homepage'><img src={backButton} alt='back' className='backButton'/></Link>
            <div className='top__part'>
                <img src={library} alt=''/>
                <h3>Library</h3>
            </div>
            <div className='class__items' >
                <label className='label' for='item'>Book Name</label>
                <input value={bookname} onChange={e => setBookname(e.target.value)} type="text" id='item' />
            </div>
            <div className='class__items'>
                <button type='submit' className='submit4' onClick={search} style={{marginTop: '20px'}}>Search</button>
            </div>
            <h2 style={{color: '#00A707', padding: '20px 0', display: 'none'}} className="library__result">Available</h2>
            <h2 style={{color: '#A70000', padding: '20px 0', display: 'none'}} className="library__result">Not Available</h2>
            {details ? details.logs ? details.logs.length>0 ?<table className="library">
                <tr>
                    <th className="first">Register Number</th>
                    <th>Taken</th>
                    <th>Returned</th>
                </tr>
                {details.logs.map((doc, index) => (
                <tr>
                    <th className="first">{doc.reg}</th>
                    <td>{doc.taken}</td>
                    <td>{doc.returned}</td>
                </tr>
                ))}
            </table> : '' : '' : ''}
        </div>
    )
}

export default Library
