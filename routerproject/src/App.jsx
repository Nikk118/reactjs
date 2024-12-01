
import './App.css'

import { Routes,Route } from 'react-router'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import GIthub from './components/GIthub'

function App() {
  return (
    <>
    <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="About" element={<About />} />
                <Route path="Contact" element={<Contact />} />
                <Route path="Github" element={<GIthub />} />
            </Route>
        </Routes>
    </>
   
  )
}

export default App
