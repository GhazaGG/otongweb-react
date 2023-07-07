import React from 'react'
import './artist.css'
import { useNavigate } from 'react-router-dom'
import vendttas from '../../assets/vendttas/ven.png'
import rio from '../../assets/rio/rio.png'
import ryzen from '../../assets/ryzen/ryzen.png'
import brian from '../../assets/niozzin/brian.png'
import adam from '../../assets/adam/adam.png'
import islan from '../../assets/islan/islan.png'
import dafa from '../../assets/exhozt/daffa.png'
import holik from '../../assets/holikpc/holik.png'
import yopan from '../../assets/yofan/yopan.png'
import doni from '../../assets/doni/ramdhoni.png'
import depol from '../../assets/depoal/depoal.png'
import ghaza from '../../assets/ghaza/ghaza.png'


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
                    <a onClick={()=> navigate('/pageVendttas')}>
                        <img className='img1' src={vendttas} ></img>
                    </a>
                    <a onClick={()=> navigate('/pageRyzen')}>
                        <img className='img2' src={ryzen} ></img>
                    </a>
                    <a onClick={()=> navigate('/pageRio')}>
                        <img className='img3' src={rio} ></img>
                    </a>
                    <a onClick={()=> navigate('/pageBrian')}>
                        <img className='img4' src={brian} ></img>
                    </a>
                    <a onClick={()=> navigate('/pageAdam')}>
                        <img className='img5' src={adam} ></img>
                    </a>
                    <a onClick={()=> navigate('/pageIslan')}>
                        <img className='img6' src={islan} ></img>
                    </a>
                    <a onClick={()=> navigate('/pageExhozt')}>
                        <img className='img7' src={dafa} ></img>
                    </a>
                    <a onClick={()=> navigate('/pageHolikPC')}>
                        <img className='img8' src={holik} ></img>
                    </a>
                    <a onClick={()=> navigate('/pageGhaza')}>
                        <img className='img9' src={ghaza} ></img>
                    </a>
                    <a onClick={()=> navigate('/pageYopan')}>
                        <img className='img10 ' src={yopan}></img>
                    </a>
                    <a onClick={()=> navigate('/pageDoni')}>
                        <img className='img11 ' src={doni}></img>
                    </a>
                    <a onClick={()=> navigate('/pageDepol')}>
                        <img className='img12 ' src={depol}></img>
                    </a>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Artist