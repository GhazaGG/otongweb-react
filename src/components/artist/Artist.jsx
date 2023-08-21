import React from 'react'
import './artist.css'
import { useNavigate } from 'react-router-dom'
import MemberList from './MemberList'


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
                <MemberList />
            </div>

        </div>
        {/* <footer>&copy; 2023 .12px All Rights Reserved</footer> */}
    </section>
  )
}

export default Artist