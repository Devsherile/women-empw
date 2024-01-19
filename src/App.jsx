import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import Hero from './sections/hero/Hero'
import About from './sections/about/About'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Header/> */}
    <Hero/>
    <About/>
    
    </>
  )
}

export default App
