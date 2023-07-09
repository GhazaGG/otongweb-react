import React from 'react'
import './work.css'
import { useNavigate } from 'react-router-dom'
import Pin from './Pin'
import data from './imageObject'

const Work = () => {
  const navigate = useNavigate()

  return (
    <section className='work-container' id='work'>
      <div className='title'>
        <h1><span>M E M B E R S</span> W O R K S</h1>
      </div>
      
      <div className='pin-container'>
        {
          data && data.map((data)=>(
            <Pin key={data.id} pinSize = {data.size} imgSrc={data.imgSrc} artist={data.artist} pageLink={data.pageLink}/>
          ))
        }
      </div>
      <div className="footer">
        <a className='home' onClick={()=> navigate("/")}>// HOME</a>
        <h1>&copy; OTONGSTUDIO</h1>
      </div>
    </section>
  )
}

export default Work