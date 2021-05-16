import React, { useState, useEffect } from 'react';
import lost from './Lost.svg'
import uploadBtn from './uploadButton.svg'
import {Link} from 'react-router-dom'
import backButton from './backButton.svg'
import {db,storage} from './firebase'


function FoundAdd() {

    const[found,setFound] = useState();
    const[place,setPlace] = useState();
    const allInputs = {imgUrl: ''}
    const [imageAsFile, setImageAsFile] = useState('')
    const [imageAsUrl, setImageAsUrl] = useState(allInputs)
    const [logLength, setLogLength] = useState()


    useEffect(() => {
        db.collection("Found")
         .onSnapshot((querySnapshot) => {
         var documents = [];
         querySnapshot.forEach((doc) => {
             documents.push(doc.data());
         });
         setLogLength(documents.length)
     });
 
     }, [])

     useEffect(() => {
         console.log(imageAsUrl)
     }, [imageAsUrl])
 
     function upload(e) {
         e.preventDefault()
         var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
         var date = new Date().getDate() + ' ' + months[new Date().getMonth()] + ' ' + new Date().getFullYear()
         db
         .collection("Found")
         .doc("log-"+(parseInt(logLength)+1))
         .set({
                 Found: found,
                 Place: place,
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
            <Link to='/found'><img src={backButton} alt='back' className='backButton'/></Link>
            <div className='top__part'>
                <img src={lost} alt=''/>
                <h3>Add Found</h3>
            </div>
            <div className='lf_btn_grp'>
                <Link to ='/addlost'><button className='lf_notactive1'>Lost</button></Link>
                <button className='lf_active1'>Found</button>
            </div>
            <div className='class__items'>
                <label className='label' for='item'>Item Found</label>
                <input value={found} onChange={e => setFound(e.target.value)} type="text" id='item' />
            </div>
            <div className='class__items'>
                <label className='label' for='place'>Place</label>
                <textarea value={place} onChange={e => setPlace(e.target.value)} type="text" id='place' style={{marginTop: '10px', marginBottom:'30px'}} />
            </div>
            <div className='class__items'>
                <label className='label'>Photo</label>
                <label for='image' className='uploadBtn'>Upload Image <img src={uploadBtn} alt=''/></label>
                <input onChange={handleImageAsFile} type='file' id='image' style={{display: 'none'}}/>
                <button onClick={upload} type='submit' className='submit'>Submit</button>
            </div>
            <Link to='/homepage'><button className="go-to-home" style={{display:'none'}}></button></Link>
        </div>
    )
}

export default FoundAdd
