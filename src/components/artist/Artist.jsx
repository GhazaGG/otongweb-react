import React from 'react'
import './artist.css'
import { useNavigate } from 'react-router-dom'


const Artist = () => {
    const navigate= useNavigate()

  return (
    <section className='artist-container'>
        <div className="artist-nav">
            <a onClick={() => navigate("/")}>// HOME</a>
            <a onClick={()=> navigate("/work")}>// WORKS</a>
        </div>
        <div className="content">
            <h1>OUR TEAM;</h1>
            <div className="member-container">
                <div className='tag'>
                    <h1><span>A NEW </span></h1>
                    <h1>VISUAL</h1>
                    <h1>EXPERIENCE</h1>
                </div>
                <div className="memberlist">
                    <div className='img1'></div>
                    <div className='img2'></div>
                    <div className='img3'></div>
                    <div className='img4'></div>
                    <div className='img5'></div>
                    <div className='img6'></div>
                    <div className='img7'></div>
                    <div className='img8'></div>
                    <div className='img9'></div>
                    <div className='img10'></div>
                    <div className='img11'></div>
                    <div className='img12'></div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Artist