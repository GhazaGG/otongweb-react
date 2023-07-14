import React from 'react'
import './home.css'
import {GiDiamonds} from 'react-icons/gi'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'

const Home = () => {
  const navigate = useNavigate()
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const textToWrite = 'pxx'
  let index = 0

  useEffect(()=> {
    const timer = setInterval(()=> {
      if (index < textToWrite.length) {
        setText((prevText)=> prevText + textToWrite.charAt(index));
        index++;
      }else {
        setShowCursor((prevShowCursor) => !prevShowCursor);
        clearInterval(timer);
      }
    },200);

    return ()=> {
      clearInterval(timer);
    };
  },[]);

  return (
    <div className="container">
      <div className="nav">
        <a onClick={() => navigate("/")}>// ABOUT</a>
        <div className='diamond'>
          <a onClick={() => navigate('/artist')}>// MEMBER</a>
          <GiDiamonds className='logo' />
        </div>
      </div>
      <div className="name">
        <h1 className='title'><span>.12</span>{text}{showCursor && <span className="cursor">|</span>}</h1>
        <h3>" a new visual experience. "</h3>
        <a onClick={()=> navigate('/work')}>W O R K S</a>
      </div>
      <footer>&copy; 2023 .12px All Rights Reserved</footer>
    </div>
  )
}

export default Home