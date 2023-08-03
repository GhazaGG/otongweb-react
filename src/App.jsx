import React from 'react'
import Home  from "./components/home/Home"
import Work from './components/work/Work'
import Artist from './components/artist/Artist'
import Page from './components/personal page/Page'
import { Route, Routes } from 'react-router-dom'
import member from './member'



const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/work' element={<Work />}/>
      <Route path='/artist' element={<Artist />}/>
      <Route path='/pageVndttas' element={<Page data={member.vndttas} />}/>
      <Route path='/pageRyzen' element={<Page data={member.ryzen} />}/>
      <Route path='/pageRio' element={<Page data={member.rio} />}/>
      <Route path='/pageBrian' element={<Page data={member.brian} />}/>
      <Route path='/pageAdam' element={<Page data={member.adam} />}/>
      <Route path='/pageIslan' element={<Page data={member.islan} />}/>
      <Route path='/pageExhozt' element={<Page data={member.exhozt} />}/>
      <Route path='/pageHolikPC' element={<Page data={member.holikpc} />}/>
      <Route path='/pageGhaza' element={<Page data={member.Ghaza} />}/> 
      <Route path='/pageYopan' element={<Page data={member.yopan} />}/>
      <Route path='/pageDoni' element={<Page data={member.doni} />}/>
      <Route path='/pageDepol' element={<Page data={member.depol} />}/>

    </Routes>

  )
}

export default App 