import React from 'react'
import './page.css'
import { useNavigate } from 'react-router-dom'
import {HiOutlineExternalLink} from 'react-icons/hi'

const Page = (props) => {
  const navigate = useNavigate()
  return (
    <section className='container'>
      <div className='banner'>
        <img src={props.data.background} alt="" />
      </div>
      <div className="member-content">
        <img src={props.data.foto} alt="" />
        <div className="desc">
          <h1 className="role">{props.data.role}</h1>
          <h1 className="job">{props.data.job}</h1>
        </div>
        <h3 className='bio1'>{props.data.bio1}</h3>
        <h3 className="bio2">{props.data.bio2}</h3>
        <a href={props.data.artwork} className='artwork'>{props.data.nama} Artwiork <HiOutlineExternalLink /></a>
      </div>
      <nav className='artist-nav'>
        <a onClick={()=> navigate("/")}>// HOME</a>
        <a a onClick={() => navigate('/artist')}>// TEAM</a>
      </nav>
    </section>
  )
}

export default Page