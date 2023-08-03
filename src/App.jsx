import React from 'react'
import Home  from "./components/home/Home"
import Work from './components/work/Work'
import Artist from './components/artist/Artist'
import Page from './components/personal page/Page'
import { Route, Routes } from 'react-router-dom'



const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/work' element={<Work />}/>
      <Route path='/artist' element={<Artist />}/>
      <Route path='/pageVndttas' element={<Page data={vndttas} />}/>
      <Route path='/pageRyzen' element={<Page data={ryzen} />}/>
      <Route path='/pageRio' element={<Page data={rio} />}/>
      <Route path='/pageBrian' element={<Page data={brian} />}/>
      <Route path='/pageAdam' element={<Page data={adam} />}/>
      <Route path='/pageIslan' element={<Page data={islan} />}/>
      <Route path='/pageExhozt' element={<Page data={exhozt} />}/>
      <Route path='/pageHolikPC' element={<Page data={holikpc} />}/>
      <Route path='/pageGhaza' element={<Page data={Ghaza} />}/>
      <Route path='/pageYopan' element={<Page data={yopan} />}/>
      <Route path='/pageDoni' element={<Page data={doni} />}/>
      <Route path='/pageDepol' element={<Page data={depol} />}/>

    </Routes>

  )
}

export default App 