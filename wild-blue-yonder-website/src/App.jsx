import { useState } from 'react'

import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import ButtonPrimary from './components/Button/ButtonPrimary.jsx'
import ButtonSecondary from './components/Button/ButtonSecondary.jsx'
import ButtonTertiary from './components/Button/ButtonTertiary.jsx'

function App() {
  return (
    <>
      <header className='shadow-gradient-top-elevation-low'>
        <Header/>
      </header>
      <main>
        
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default App
