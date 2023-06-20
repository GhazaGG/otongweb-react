import React from 'react'
import Home  from "./components/home/Home"
import Work from './components/work/Work'
import Artist from './components/artist/Artist'
import Preloader from './components/preloader/Preloader'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      {/* <Preloader /> */}


      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/work' element={<Work />}/>
      <Route path='/artist' element={<Artist />}/>

    </Routes>
    </>

  )
}

export default App