import React, { useEffect } from 'react'
import Home  from "./components/home/Home"
import Work from './components/work/Work'
import Artist from './components/artist/Artist'
import Page from './components/personal page/Page'
import { Route, Routes } from 'react-router-dom'
import member from './member'
import Login from './components/login/Login'
import Register from './components/login/Register'
import Axios from 'axios'
import axios from 'axios'
import UserContextProvider from './UserContext'
import Admin from './components/admin/Admin'


axios.defaults.baseURL ='http://localhost:4000'
axios.defaults.withCredentials = true

const App = () => {
    return (
        <UserContextProvider >
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
                <Route path='/login' element={<Login />}/>
                <Route path='/register' element={<Register />}/>
                <Route path='/admin' element={<Admin />}/>
        </Routes>
    </UserContextProvider>

)
}

export default App 