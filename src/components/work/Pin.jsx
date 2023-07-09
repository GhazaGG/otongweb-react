import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './work.css'

function Pin({pinSize, imgSrc, artist, pageLink, }) {
  const navigate= useNavigate()
  const [isHovered, setIsHovered] = useState(false);


  return (
    <div className={`pin ${pinSize}`}>
        <a href='' onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
            <img src={imgSrc} className='mainPic' alt="" />
            {isHovered && <div className="visitArtist">
          <div className='desc-container'>
            <p className="nama">{artist}</p>
            <button className='visit-button' onClick={()=> navigate(pageLink)}>Visit</button>
          </div>
        </div>}
        </a>
    </div>
  )
}

export default Pin