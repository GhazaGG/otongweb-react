import React, { useEffect, useState } from 'react'
import {MdAddCircle} from 'react-icons/md'
import {BsArrowReturnLeft} from 'react-icons/bs'
import {RiSendPlaneLine} from 'react-icons/ri'
import axios from 'axios';
import './admin.css'



const Artwork = () => {
    const [activeView, setActiveView] = useState('artWork')
    const [artworkData, setArtworkData] = useState([])
    const [artistName, setArtistName] = useState('')
    const [artistPage, setArtistPage] = useState('')
    const [size, setSize] = useState('')
    const [imgLink, setImgLink] = useState('')

    const handleUpload = async ()=> {
        const formData = {
            artist: artistName,
            pageLink: artistPage,
            size: size,
            imageLink: imgLink,
        }
        try {
            const response = await axios.post('/upload-artwork', formData)
            console.log(response.data)
            setArtistName('')
            setArtistPage('')
            setSize('')
            setImgLink('')
        }catch(error){
            console.error('eror uploading image', error)
        }
    }

    useEffect(() =>{
        axios.get('/get-artwork').then(response => {
            setArtworkData(response.data)
        }).catch(error =>{
            console.error('Eror fetching artwork data', error)
        })
    })
    
    const handleDelete = async (artworkId) => {
        const confirmed = window.confirm(`apakah benar mau menghapus artwork dengan id ${artworkId} ?`);
        if (confirmed) {
            try {
                await axios.delete(`/delete-artwork/${artworkId}`);
                const response = await axios.get('/get-artwork');
                setArtworkData(response.data);
            } catch (error) {
                console.error('Error deleting artwork', error);
            }
        }
    };

    return (
        <div className='artwork-container'>
            <button className={`add ${activeView === 'artWork' ? 'active' : ''}`} onClick={()=> setActiveView('upload')}><MdAddCircle /> Tambahkan Artwork</button>
            {activeView == 'upload' && (
                
                <div className="upload">
                <form action="" className='upload-form'>
                    <h2>Artist Name</h2>
                    <select name="artist" 
                    id="artist" 
                    value={artistName} 
                    onChange={(e)=>setArtistName(e.target.value)}>
                        <option value="Vndttas">Vndttas</option>
                        <option value="Ryzen">Ryzen</option>
                        <option value="Satrio Aji ">Satrio</option>
                        <option value="Niozzin">Brian</option>
                        <option value="Adam">Adam</option>
                        <option value="Islan">Islan</option>
                        <option value="Exhozt">Exhozt</option>
                        <option value="HolikPC">HolikPC</option>
                        <option value="Ghaza">Ghaza</option>
                        <option value="Yopan">Yopan</option>
                        <option value="Doni">Doni</option>
                        <option value="Depol">Depoal</option>
                    </select>
                    <h2>Artist Page</h2>
                    <select name="pageLink" 
                    id="pageLink"
                    value={artistPage}
                    onChange={(e)=> setArtistPage(e.target.value)}>
                        <option value="/pageVndttas">Vndttas</option>
                        <option value="/pageRyzen">Ryzen</option>
                        <option value="/pageRio">Satrio</option>
                        <option value="/pageBrian">Brian</option>
                        <option value="/pageAdam">Adam</option>
                        <option value="/pageIslan">Islan</option>
                        <option value="/pageExhozt">Exhozt</option>
                        <option value="/pageHolikPC">HolikPC</option>
                        <option value="/pageGhaza">Ghaza</option>
                        <option value="/pageYopan">Yopan</option>
                        <option value="/pageDoni">Doni</option>
                        <option value="/pageDepol">Depoal</option>
                    </select>
                    <h2>Size</h2>
                    <select name="size" 
                    id="size"
                    value={size}
                    onChange={(e)=> setSize(e.target.value)}>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>  
                        <option value="large">Large</option>
                    </select>
                    <h2>Link Artwork</h2>
                    <div className="link-art">
                        <input 
                        type="text" 
                        placeholder='Paste link artwork disini....' 
                        value={imgLink} 
                        onChange={(e)=> setImgLink(e.target.value)}/>
                        <button>Sip 👍</button>
                    </div>
                    <div className="navigation-button">
                        <button className='return' onClick={()=> setActiveView('artWork')}><BsArrowReturnLeft/> Kembali</button>
                        <button className='submitUpload'
                        onClick={handleUpload}>Submit <RiSendPlaneLine /></button>
                    </div>
                    
                </form>
            </div>

            )}

            {activeView == 'artWork'&& (
                <div className="gallery">
                    {artworkData.map((artwork) => (
                        <div key={artwork._id} className="artwork-item">
                            <img className='AdminImg' src={artwork.imageLink} alt={`Artwork by ${artwork.artist}`} />
                            <p>Artist: {artwork.artist}</p>
                            <p>Size: {artwork.size}</p>
                            <p>Id: {artwork._id}</p>
                            <button onClick={() => handleDelete(artwork._id)}>Delete</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Artwork