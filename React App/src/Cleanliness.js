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
        db
        .collection("cleanliness")
        .doc("log-"+logLength)
        .set({
                year: year,
                dept: depart,
                sec: section,
                prob: prob,
                img: imageAsUrl.imgUrl
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
                <label className='label' for='year'>Year</label>
                <select value={year} onChange={e => setYear(e.target.value)} id='year'>
                    <option>Select an Option</option>
                    <option value="1">1st Year</option>
                    <option value="2">2nd Year</option>
                    <option value="3">3rd Year</option>
                    <option value="4">4th Year</option>
                </select>
            </div>
            <div className='class__items'>
                <label className='label' for='department'>Department</label>
                <select value={depart} onChange={e => setDepart(e.target.value)} id='department'>
                    <option>Select an Option</option>
                    <option value="ECE">ECE</option>
                    <option value="CSE">CSE</option>
                    <option value="Mech">Mech</option>
                    <option value="MBA">MBA</option>
                </select>
            </div>
            <div className='class__items'>
                <label className='label' for='section'>Section</label>
                <select value={section} onChange={e => setSection(e.target.value)} id='section' style={{marginBottom: '-10px'}}>
                    <option>Select an Option</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                </select>
            </div>
            <div className='class__items'>
                <label className='label' for='problem'>Problem</label>
                <textarea value={prob} onChange={e => setProb(e.target.value)} id='problem'></textarea>
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
