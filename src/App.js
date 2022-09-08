import React from 'react'
import Menu from './component/menu'
import Music from './component/music'
import Contact from './component/contact'
import Pnf from './component/pnf'
import Track from './component/track'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
function App(props){
  return(
    <BrowserRouter>
        <Menu/>
        <Routes>
          <Route path={'/'} element={<Music/>}/>
          <Route path={'/music'} element={<Music/>}/>
          <Route path={'/contact'} element={<Contact/>}/>
          <Route path={'/track/:id'} element={<Track/>}/>
          <Route path={'/*'} element={<Pnf/>}/>
        </Routes>

    </BrowserRouter>

  )
}
export default App
