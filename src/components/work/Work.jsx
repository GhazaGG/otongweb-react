import React, { useContext, useState } from 'react'
import './work.css'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Pin from './Pin'
import { UserContext } from '../../UserContext';
import axios from 'axios'


const Work = () => {
  const navigate = useNavigate()
  const [scrolled, setScrolled] = useState(false)
  const [artworkData, setArtworkData] = useState([])
  const {user} = useContext(UserContext);

  useEffect(()=> {
    const handleScroll = ()=> {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  useEffect (()=>{
    axios.get('/get-artwork').then(response => {
      setArtworkData(response.data)
    }).catch(error =>{
      console.error('Eror fetching data')
    })
  })

  return (
    <div className='work-container' id='work'>
      <nav className={scrolled ? 'work-nav scrolled' : 'work-nav'}>
        <a className='home' onClick={()=> navigate("/")}>// HOME</a>
        <div className='title'>
          <h1><span>M E M B E R S</span> W O R K S</h1>
        </div>
        <h1 className='cc'></h1>
      </nav>

      
      <div className='pin-container'>
        {
          artworkData && artworkData.map((artwork)=>(
            <Pin key={artwork._id} pinSize = {artwork.size} imgSrc={artwork.imageLink} artist={artwork.artist} pageLink={artwork.pageLink}/>
          ))
        }
      </div>
    </div>
  )
}

export default Work