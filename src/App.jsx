import './App.css'
import Navbar from './Comp/Navbar'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Comp/Home'
import About from './Comp/About'
import Skills from './Comp/Skills'
import Projects from './Comp/Projects'

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />}/>
      <Route path='/skills' element={<Skills />}/>
      <Route path='/projects' element={<Projects />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
