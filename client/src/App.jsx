import { useState } from 'react'
import { Footer } from './Components/Footer'
import { Cards } from './Components/Cards'
import { Nav } from './Components/Nav'
import { Intro } from './Components/Intro'
import { Details } from './Components/Details'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="bg-red-600">
      <Nav/>
      <Intro autoSlide={true}/>
   
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App
