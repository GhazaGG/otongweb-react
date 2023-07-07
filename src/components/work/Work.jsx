import React from 'react'
import './work.css'
import { useNavigate } from 'react-router-dom'

const Work = () => {
  const navigate = useNavigate()

  return (
    <section className='work-container' id='work'>
      <div className='title'>
        <h1><span>M E M B E R S</span> W O R K S</h1>
      </div>
      {/* <div className="card-container">
        <article className='card card-1'>
          <div className="card-title">
            <h3>Otong Liquid Vape</h3>
            <h5>Portfolio Artist</h5>
          </div>
          <div className='card-number'> 
            01
          </div>
        </article>

        <article className='card card-2'>
          <div className="card-title">
            <h3>Event Advertising</h3>
            <h5>Client; Skandium Project</h5>
          </div>
          <div className='card-number'> 
            02
          </div>
        </article>

        <article className='card card-3'>
          <div className="card-title">
            <h3>Mechanical Keyboard</h3>
            <h5>Portfolio Artist</h5>
          </div>
          <div className='card-number'> 
            03
          </div>
        </article>

        <article className='card card-4'>
          <div className="card-title">
            <h3>Logo Animation</h3>
            <h5>Client; Skandium Project</h5>
          </div>
          <div className='card-number'> 
            04
          </div>
        </article>
      </div> */}
      <div className="footer">
        <a className='home' onClick={()=> navigate("/")}>// HOME</a>
        <h1>&copy; OTONGSTUDIO</h1>
      </div>
    </section>
  )
}

export default Work