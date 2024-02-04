import { useState } from 'react'
import { Footer } from './Components/Footer'
import { Cards } from './Components/Cards'
import { Nav } from './Components/Nav'
import { Intro } from './Components/Intro'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Intro/>
      <h1 class='font-mono text-9xl'> Poke-Api</h1>
      <Nav/>
      <Cards/>
      <Footer/>
    </>
  )
}

export default App
