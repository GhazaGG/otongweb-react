import React from 'react'
import Home  from "./components/home/Home"
import Work from './components/work/Work'
import Artist from './components/artist/Artist'
import Page from './components/personal page/Page'
import { Route, Routes } from 'react-router-dom'



const App = () => {

  const vendttas = {
    nama : "vendttas artwork",
    role : '3D Artist',
    job : 'Compositor',
    bio1 : 'Faisal Firmansyah a.k.a Vndttas is 21 years-old 3D Designer & Digital Artist, study filmaking at Institut Seni Budaya Indonesia Bandung.',
    bio2: 'He starting freelance as a video editor since 2017 and then focusing with 3D Creation since 2019, now he currently employed at Maximum The Ultimate',
    work : 'https://www.instagram.com/vndttas/',
    foto : require('./assets/vendttas/ven.png'),
    background :require('./assets/vendttas/banner - ven.png')
}
  const ryzen = {
    nama : 'MeRyzen artwork',
    role : '3D Artist',
    bio1 : 'Tegar Hardiansyah a.k.a RYZEN is a 3D creator living in Indonesia. With he’s skills in Blender,and able to bring my imagination to life and create amazing virtual worlds',
    bio2 : 'Through the creations, he have successfully secured opportunities to sell NFT works, which connects he’s to a global community of artists. Have fun exploring 3D world!',
    work : 'https://www.instagram.com/me.ryzen/',
    foto: require('./assets/ryzen/ryzen.png'),
    background: require('./assets/ryzen/banner - ryzen.png')
  }
  
  const rio = {
    nama: 'Satrio Aji artwork',
    role: '3D Artist',
    job: 'Graphic Designer',
    bio1: 'Satrio Aji a.k.a keepdahustle is a 3D Artist, Graphic Designer, Video Editor From Jakarta, Indonesia. He’s now study Computer Science at Telkom University Jakarta.Satrio Aji a.k.a keepdahustle is a 3D Artist, Graphic Designer, Video Editor From Jakarta, Indonesia. He’s now study Computer Science at Telkom University Jakarta.',
    bio2 : 'Rio starting freelance since 2020 as a Video Editor and currently focusing on 3D Design or Fashion Design, He represent all of things he got from life, love, and lust into their art.',
    work:'https://www.instagram.com/keepdahustle/',
    foto :require('./assets/rio/rio.png'),
    background: require('./assets/rio/banner - rio.png')
  }

  const brian ={
    nama : 'NIOZZIN artwork',
    role : '2D Artist',
    bio1 : "NIOZZIN a.k.a Brian Satrio is a 2D Artist based in Purbalingga, Indonesia. He’s start freelancing as a Digital Painter since 2021.",
    bio2: 'He’s highly inspired from various landscape photographer, and he have a moto “joy of the painting”.',
    work: 'https://www.instagram.com/briyan_satrio/',
    foto: require('./assets/niozzin/brian.png'),
    background: require('./assets/niozzin/banner - brian.png')
  }

  const adam = {
    nama : 'AdamAlfysr artwork',
    role : '3D Artist',
    job : 'Compositor',
    bio1 :'Adam Alfihsyar is a 3D Environment Artist based from Banyuwangi, Indonesia.',
    bio2 :'Since 2019, he starting from a video editor to a 3D artist until now, focusing on the surreal world and environment design with animated visual audio output so that the audience can feel his world.',
    work: 'https://www.instagram.com/xxalfsyr/',
    foto: require('./assets/adam/adam.png'),
    background: require('./assets/adam/banner - adam.png')
  }

  const islan = {
    nama : 'Islangrh artwork',
    role : '3D Artist',
    bio1 :'Faisal Anugrah a.k.a Islangrh is a 3D Artist & Cloth Designer based from Bandung, Indonesia.',
    bio2 :' He study about 3D since 2015 and advancing to do Art & 3D fashion design since last couple year, Now he currently as Chemical Engineering student at Jenderal Achmad Yani University.',
    work: 'https://www.instagram.com/islangrh/',
    foto: require('./assets/islan/islan.png'),
    background: require('./assets/islan/banner - islan.png')
  }

  const exhozt = {
    nama : 'exhozt artwork',
    role : '2D Artist',
    job : 'Graphic Designer',
    bio1 :'EXHOZT a.k.a Daffa Umar is a 21 years-old 2D Artist based artist in Indonesia. He make Vapoart, Iofi, and Aesthetic Design in their works also have an experience of it almost 3 years.',
    bio2 :'He’s currently freelance and sell their Artwork Prints at some global marketplace art.',
    work: 'https://www.instagram.com/exhozt_/',
    foto: require('./assets/exhozt/daffa.png'),
    background: require('./assets/exhozt/banner - daffa.png')
  }

  const holikpc = {
    nama : 'HolikPC artwork',
    role : '3D Artist',
    bio1 :'HOLIKPC a.k.a Nur Holik is a self-taught 3D Artist based from Indonesia, Holik starting to 3D Arts since 2018 when he is a Student of High School at multimedia Vocational, and now he’s currently freelancing.',
    bio2 :'With a developer mindset, he specialize in Landscape, Lighting, and 3D Visualization. He’s hoping everyone see their art can recovery their soul.',
    work: 'https://www.instagram.com/holikpc/',
    foto: require('./assets/holikpc/holik.png'),
    background: require('./assets/holikpc/banner - holik.png')
  }

  const Ghaza = {
    nama : 'GhazaGG Work',
    role : 'IT',
    bio1 :'Ghaza Gymnastiar a.k.a GhazaGG is a Computer Science & Junior Developer based from Purbalingga, Indonesia. He’s currently in third year majoring in Informatics Engineering at STMIK Widya Utama',
    bio2 :'He’s 21 years old and have a great interest in becoming a full-stack developer and anything related to that. Apart from that he spend spare time playing games and watching anime.',
    work: 'https://github.com/GhazaGG',
    foto: require('./assets/ghaza/ghaza.png'),
    background: require('./assets/ghaza/ghaza-banner.jpg')
  }

  const yopan = {
    nama : 'Yofan artWork',
    role : '2D Artist',
    bio1 :'Yofan a.k.a Jofan Chan is a 2D Artist and Gamer based from Banyuwangi, Indonesia.',
    bio2 :' He’s hobby is drawing some Vector Art, Playing games and also cooking.',
    work: 'https://www.instagram.com/jofan_chan/',
    foto: require('./assets/yofan/yopan.png'),
    background: require('./assets/yofan/banner - yopan.png')
  }

  const doni = {
    nama : 'RYOVLRT Work',
    role : 'IT Support',
    bio1 :'Ramadhoni Gibran a.k.a Ryovlrt is a Proggramer and Gamer based in Bogor, Indonesia.',
    bio2 :'He’s hobby is playing game such as Valorant and learning about code of programing.',
    work: 'https://twitter.com/RyoVLRT',
    foto: require('./assets/doni/ramdhoni.png'),
    background: require('./assets/doni/banner - ramdhoni.png')
  }

  const depol = {
    nama : 'Depoal work',
    role : 'Graphic Designer',
    bio1 :'Deva Agzidan Setyo Budi a.k.a DePoAl is a Graphic Designer and Gamer based from Jambu, Indonesia.',
    bio2 :' He’s now highly inspired to Photograpy since he was on High School',
    work: 'https://www.instagram.com/deva_net/',
    foto: require('./assets/depoal/depoal.png'),
    background: require('./assets/depoal/banner - depoal.png')
  }

  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/work' element={<Work />}/>
      <Route path='/artist' element={<Artist />}/>
      <Route path='/pageVendttas' element={<Page data={vendttas} />}/>
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