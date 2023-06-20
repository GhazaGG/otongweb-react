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
        <div className="tag">
            <h1>OUR TALENT</h1>
            <h2 className='member'>MEMBERS.</h2>
            <div className="tag-list">
                <div className='tag-list-nomer tag-list3D'>
                    <h2 className='nomer'>01</h2>
                    <div className="tag-list-title">
                        <h2>3D ARTIST </h2>
                        <h5 className='artist-name'>
                            <a href="https://www.instagram.com/holikpc/" target='_blank'>HolikPC </a>
                            <a href="https://www.instagram.com/vndttas/" target='_blank'>Vndttas </a>
                            <a href="https://www.instagram.com/xxalfsyr/" target='_blank'>xxalfsyr </a>
                            <a href="https://www.instagram.com/keepdahustle/" target='_blank'>Satrio Aji </a>
                            <a href="https://www.instagram.com/me.ryzen/" target='_blank'>Meryzen </a>
                            <a href="https://www.instagram.com/yanlexart/" target='_blank'>Yanlexart </a>
                            <a href="https://www.instagram.com/islangrh/" target='_blank'>Islangrh </a>
                        </h5>
                    </div>
                </div>

                <div className='tag-list-nomer tag-list2D'>
                    <h2 className='nomer'>02</h2>
                    <div className="tag-list-title">
                        <h2>2D ARTIST </h2>
                        <h5 className='artist-name'>
                            <a href="https://www.instagram.com/briyan_satrio/" target='_blank'>Brian Satrio </a>
                            <a href="https://www.instagram.com/exhozt_/" target='_blank'>Exhozt </a>
                            <a href="https://www.instagram.com/jofan_chan/" target='_blank'>Yofan Chan</a>
                        </h5>
                    </div>
                </div>

                <div className='tag-list-nomer tag-listdev'>
                    <h2 className='nomer'>03</h2>
                    <div className="tag-list-title">
                        <h2>IT / DEV </h2>
                        <h5 className='artist-name'>
                            <a href="https://www.instagram.com/ghazagg/" target='_blank'>GhazaGG </a>
                            <a href="https://www.instagram.com/ramdhon1_/" target='_blank'>Ramdhoni </a>
                            <a href="https://www.instagram.com/deva_net/" target='_blank'>Depoal</a>
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Artist