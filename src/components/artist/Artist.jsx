import React from 'react'
import './artist.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
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
    const [isHovered, setIsHovered] = useState(false);
    const isMobileView = window.innerWidth <= 991;

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
                    <a onClick={()=> navigate('/pageVndttas')} onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                        <img className='img1' src={vendttas} ></img>
                        {(isHovered || isMobileView) && <div className="visit">
                            <div className='desc-container'>
                                <p className="nama">VNDTTAS</p>
                                <p className="role">3D ARTIST</p>
                            </div>
                        </div>}
                    </a>
                    <a onClick={()=> navigate('/pageRyzen')} onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                        <img className='img2' src={ryzen} ></img>
                        {(isHovered || isMobileView) && <div className="visit">
                            <div className='desc-container'>
                                <p className="nama">MERYZEN</p>
                                <p className="role">3D ARTIST</p>
                            </div>
                        </div>}
                    </a>
                    <a onClick={()=> navigate('/pageRio')} onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                        <img className='img3' src={rio} ></img>
                        {(isHovered || isMobileView) && <div className="visit">
                            <div className='desc-container'>
                                <p className="nama">SATRIO AJI</p>
                                <p className="role">3D ARTIST</p>
                            </div>
                        </div>}
                    </a>
                    <a onClick={()=> navigate('/pageBrian')} onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                        <img className='img4' src={brian} ></img>
                        {(isHovered || isMobileView) && <div className="visit">
                            <div className='desc-container'>
                                <p className="nama">NIOZZIN</p>
                                <p className="role">2D ARTIST</p>
                            </div>
                        </div>}
                    </a>
                    <a onClick={()=> navigate('/pageAdam')} onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                        <img className='img5' src={adam} ></img>
                        {(isHovered || isMobileView) && <div className="visit">
                            <div className='desc-container'>
                                <p className="nama">ADAMALFYSR</p>
                                <p className="role">3D ARTIST</p>
                            </div>
                        </div>}
                    </a>
                    <a onClick={()=> navigate('/pageIslan')} onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                        <img className='img6' src={islan} ></img>
                        {(isHovered || isMobileView) && <div className="visit">
                            <div className='desc-container'>
                                <p className="nama">ISLANGRH</p>
                                <p className="role">3D ARTIST</p>
                            </div>
                        </div>}
                    </a>
                    <a onClick={()=> navigate('/pageExhozt')} onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                        <img className='img7' src={dafa} ></img>
                        {(isHovered || isMobileView) && <div className="visit">
                            <div className='desc-container'>
                                <p className="nama">EXHOZT</p>
                                <p className="role">2D ARTIST</p>
                            </div>
                        </div>}
                    </a>
                    <a onClick={()=> navigate('/pageHolikPC')} onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                        <img className='img8' src={holik} ></img>
                        {(isHovered || isMobileView) && <div className="visit">
                            <div className='desc-container'>
                                <p className="nama">HOLIKPC</p>
                                <p className="role">3D ARTIST</p>
                            </div>
                        </div>}
                    </a>
                    <a onClick={()=> navigate('/pageGhaza')} onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                        <img className='img9' src={ghaza} ></img>
                        {(isHovered || isMobileView) && <div className="visit">
                            <div className='desc-container'>
                                <p className="nama">GHAZA</p>
                                <p className="role">IT</p>
                            </div>
                        </div>}
                    </a>
                    <a onClick={()=> navigate('/pageYopan')} onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                        <img className='img10 ' src={yopan}></img>
                        {(isHovered || isMobileView) && <div className="visit">
                            <div className='desc-container'>
                                <p className="nama">YOFAN</p>
                                <p className="role">2D ARTIST</p>
                            </div>
                        </div>}
                    </a>
                    <a onClick={()=> navigate('/pageDoni')} onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                        <img className='img11 ' src={doni}></img>
                        {(isHovered || isMobileView) && <div className="visit">
                            <div className='desc-container'>
                                <p className="nama">RAMDHONI</p>
                                <p className="role">IT</p>
                            </div>
                        </div>}
                    </a>
                    <a onClick={()=> navigate('/pageDepol')} onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                        <img className='img12 ' src={depol}></img>
                        {(isHovered || isMobileView) && <div className="visit">
                            <div className='desc-container'>
                                <p className="nama">DEPOAL</p>
                                <p className="role">GRAPHIC DESIGNER</p>
                            </div>
                        </div>}
                    </a>
                </div>
            </div>

        </div>
        {/* <footer>&copy; 2023 .12px All Rights Reserved</footer> */}
    </section>
  )
}

export default Artist