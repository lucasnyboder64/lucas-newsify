import { useState } from 'react'
import "./App.scss"
import Splashscreen from './components/Splashscreen/Splashscreen'
import Home from './components/Home/Home'
import Settings from './components/Settings/Settings'
import "./style.scss"
import { Route, Routes } from 'react-router'
import { GloalProvider } from './GlobalContext'
import Archive from './components/Archive/Archive'
import Popular from './components/Popular/Popular'

function App() {

  return (
    <>
      <GloalProvider>
        <div className='wrapper'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/popular" element={<Popular />} />
          </Routes>
        </div>
      </GloalProvider>
    </>
  )
}

export default App
