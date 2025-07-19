import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Card from './components/Card'
import Projects from './Pages/Projects'
import Skill from './Pages/Skill'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Navbar/>
       {/* <Card/> */}
       {/* <Projects/> */}
       <Skill/>
    </>
  )
}

export default App
