import React from 'react'
import Home  from "./components/home/Home"
import Work from './components/work/Work'
import Artist from './components/artist/Artist'
import Page from './components/personal page/Page'
import { Route, Routes } from 'react-router-dom'



const App = () => {

  const vendttas = {
    id : 1,
    nama : "vendttas",
    role : '3D Artist',
    job : 'Compositor',
    bio1 : 'Faisal Firmansyah a.k.a Vndttas is 21 years-old 3D Designer & Digital Artist, study filmaking at Institut Seni Budaya Indonesia Bandung.',
    bio2: 'He starting freelance as a video editor since 2017 and then focusing with 3D Creation since 2019, now he currently employed at Maximum The Ultimate',
    artwork : 'https://www.instagram.com/vndttas/',
    foto : require('./assets/vendttas/ven.png'),
    background :require('./assets/vendttas/banner - ven.png')
}
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/work' element={<Work />}/>
      <Route path='/artist' element={<Artist />}/>
      <Route path='/page' element={<Page data={vendttas} />}/>
    </Routes>

  )
}

export default App 