import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from './components/Layout.jsx'
import { createBrowserRouter, createRoutesFromChildren, Route, RouterProvider } from 'react-router-dom'
import About from './Pages/About.jsx'
import Projects from './Pages/Projects.jsx'
import Skill from './Pages/Skill.jsx'
import Home from './Pages/Home.jsx'
import Contact from './Pages/Contact.jsx'
import Timeline from './Pages/Timeline.jsx'

const router= createBrowserRouter(
  createRoutesFromChildren(
    <Route path='/' element={<Layout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/project' element={<Projects/>}/>
      <Route path='/skill' element={<Skill/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/timeline' element={<Timeline/>}/>

    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
