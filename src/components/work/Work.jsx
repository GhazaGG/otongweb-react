import React, { useContext, useState } from 'react'
import './work.css'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Pin from './Pin'
import data from './imageObject'
import { UserContext } from '../../UserContext';


const Work = () => {
  const navigate = useNavigate()
  const [scrolled, setScrolled] = useState(false)
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

  return (
    <section className='work-container' id='work'>
      <nav className={scrolled ? 'work-nav scrolled' : 'work-nav'}>
        <a className='home' onClick={()=> navigate("/")}>// HOME</a>
        <div className='title'>
          <h1><span>M E M B E R S</span> W O R K S</h1>
        </div>
        <h1 className='cc'></h1>
      </nav>

      
      <div className='pin-container'>
        {
          data && data.map((data)=>(
            <Pin key={data.id} pinSize = {data.size} imgSrc={data.imgSrc} artist={data.artist} pageLink={data.pageLink}/>
          ))
        }
      </div>
    </section>
  )
}

export default Work