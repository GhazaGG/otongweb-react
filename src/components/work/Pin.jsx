import React from 'react'
import './work.css'
import data from './imageObject'

function Pin({pinSize, imgSrc, artist, pageLink, }) {
  return (
    <div className={`pin ${pinSize}`}>
        <a href={pageLink}>
            <img src={imgSrc} className='mainPic' alt="" />
        </a>
    </div>
  )
}

export default Pin