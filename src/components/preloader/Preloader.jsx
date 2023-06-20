import React from 'react'
import './preloader.css'
import { useEffect } from 'react'
import { preLoaderAnim } from '../../animations'

const Preloader = () => {
    useEffect(()=>{
        preLoaderAnim()
    },[])

  return (
    <div className="preloader">
        <div className="text-container">
            <span>2D Artist,</span>
            <span>3D Artist,</span>
            <span>Developer.</span>
        </div>
    </div>
  )
}

export default Preloader