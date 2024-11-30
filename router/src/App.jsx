
import { Routes,Route } from 'react-router-dom';
import {Home} from './components/Home';
import React from 'react'
const LazyAbout = React.lazy(()=>import('./components/About'))
// import {About} from './components/About';
import {Navbar} from './components/Navbar';
import Navi_manually from './components/Navi_manually';
import Default from './components/Default';
import Prouduct from './components/Prouduct';
import New from './components/New';
import Populer from './components/Populer';
import User from './components/User';
import Userdeatil from './components/Userdeatil';
function App() {


  return (
   <>
   <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={
        <React.Suspense fallback='loading.......'>
          <LazyAbout/>
        </React.Suspense>
        }/>

      <Route path='/navigate' element={<Navi_manually/>}/>
      <Route path='/*' element={<Default/>}/>
      <Route path='/user' element={<User/>}>
       <Route path=':userId' element={<Userdeatil/>}/>
      </Route>
      <Route path='/products' element={<Prouduct/>}>
        <Route index element={<New/>}/>
        <Route path='new' element={<New/>}/>
        <Route path='populer' element={<Populer/>}/>
      </Route>
      

    </Routes>
   </>
  )
}

export default App
