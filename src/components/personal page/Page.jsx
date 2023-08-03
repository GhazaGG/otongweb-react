import React from 'react'
import './page.css'
import { useNavigate } from 'react-router-dom'
import {HiOutlineExternalLink} from 'react-icons/hi'
// social 
import {AiFillInstagram} from 'react-icons/ai'
import{AiOutlineTwitter} from 'react-icons/ai'
import{AiOutlineBehance} from 'react-icons/ai'
import{MdEmail} from 'react-icons/md'
import {CgWebsite} from 'react-icons/cg'
import { AiFillGithub } from 'react-icons/ai'
import {SiMatrix} from 'react-icons/si'
import {AiFillYoutube} from 'react-icons/ai'


const Page = (props) => {
  const navigate = useNavigate()
  return (
    <section className='container-page'>
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
        <a href={props.data.work} className='artwork' target='_blank'>{props.data.nama} <HiOutlineExternalLink /></a>
        <div className="sosial-media">
          {props.data.instagram && (<a href='props.data.work' target='_blank'><AiFillInstagram /></a>)}

          {props.data.twitter && (<a href={props.data.twitter} target='_blank'><AiOutlineTwitter /></a>)}

          {props.data.behance && (<a href={props.data.behance} target='_blank'><AiOutlineBehance /></a>)}

          {props.data.email && (<a href={props.data.email} target='_blank'><MdEmail /></a>)}

          {props.data.website && (<a href={props.data.website} target='_blank'><CgWebsite /></a>)}

          
          {props.data.github && (<a href={props.data.github} target='_blank'><AiFillGithub /></a>)}

          
          {props.data.matrix && (<a href={props.data.matrix} target='_blank'><SiMatrix /></a>)}
          
          {props.data.youtube && (<a href={props.data.youtube} target='_blank'><AiFillYoutube /></a>)}
        </div>
      </div>
      <nav className='page-nav'>
        <a onClick={()=> navigate("/")}>// HOME</a>
        <a a onClick={() => navigate('/artist')}>// TEAM</a>
      </nav>
    </section>
  )
}

export default Page