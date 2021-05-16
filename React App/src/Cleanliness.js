import React, { useState, useEffect } from 'react';
import './Cleanliness.css'
import brush from './Cleanliness.svg'
import uploadBtn from './uploadButton.svg'
import {Link} from 'react-router-dom'
import backButton from './backButton.svg'
import {db,storage} from './firebase'

function Cleanliness() {

    const[year,setYear] = useState();
    const[depart,setDepart] = useState();
    const[section,setSection] = useState();
    const[prob,setProb] = useState();
    const[doc_id, setDoc_id]=useState();
    const allInputs = {imgUrl: ''}
    const [imageAsFile, setImageAsFile] = useState('')
    const [imageAsUrl, setImageAsUrl] = useState(allInputs)
    const [logLength, setLogLength] = useState()
    const[location,setLocation] = useState();

    useEffect(() => {

       db.collection("cleanliness")
        .onSnapshot((querySnapshot) => {
        var documents = [];
        querySnapshot.forEach((doc) => {
            documents.push(doc.data());
        });
        setLogLength(documents.length)
    });

    }, [])

    function upload(e) {
        e.preventDefault()
        var date = new Date().getDate() + '/' + new Date().getMonth() + '/' + new Date().getFullYear()
        
        db
        .collection("cleanliness")
        .doc("log-"+logLength)
        .set({
                location: location,
                prob: prob,
                img: imageAsUrl.imgUrl,
                date: date
            });

        document.getElementsByClassName('go-to-home')[0].click()
    }

    const handleImageAsFile = (e) => {
        const image = e.target.files[0]
        setImageAsFile(imageFile => (image))
    }
    useEffect(() => {
        console.log('start of upload')
        if(imageAsFile === '') {
            console.error(`not an image, the image file is a ${typeof(imageAsFile)}`)
        }
        else{
        const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile)
        uploadTask.on('state_changed', 
        (snapShot) => {
            console.log(snapShot)
        }, (err) => {
            console.log(err)
        }, () => {
            storage.ref('images').child(imageAsFile.name).getDownloadURL()
                .then(fireBaseUrl => {
                setImageAsUrl(prevObject => ({...prevObject, imgUrl: fireBaseUrl}))
            })
        })
        document.getElementsByClassName('uploadBtn')[0].innerHTML = 'Uploaded'
        }
    }, [imageAsFile])

    return (
        <div className='clean'>
        <Link to='/homepage'><img src={backButton} alt='back' className='backButton'/></Link>
            <div className='top__part'>
                <img src={brush} alt=''/>
                <h3>Maintenance</h3>
            </div>
            <form>
            <div className='class__items' style={{marginTop:'50px'}}>
                <label className='label' for='item'>Location</label>
                <input value={location} onChange={e => setLocation(e.target.value)} type="text" id='item' />
            </div>
            <div className='class__items'>
                <label className='label' for='problem'>Problem</label>
                <textarea value={prob} onChange={e => setProb(e.target.value)} id='problem' style={{marginTop: '10px'}}></textarea>
            </div>
            <div className='class__items'>
                <label className='label'>Photo</label>
                {/* <label className='label' className='uploadBtn'>Uploaded</label> */}
                <label for='image' className='uploadBtn'>Upload Image <img src={uploadBtn} alt=''/></label>
                <input  onChange={handleImageAsFile} type='file' id='image' style={{display: 'none'}}/>
                <button type='submit' onClick={upload} className='submit'>Submit</button>
            </div>
            </form>
            <Link to='/homepage'><button className="go-to-home" style={{display:'none'}}></button></Link>
        </div>
    )
}

export default Cleanliness
