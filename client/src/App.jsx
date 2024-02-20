import { useState } from 'react'
import { Footer } from './Components/Footer'
import { Cards } from './Components/Cards'
import { Nav } from './Components/Nav'
import { Intro } from './Components/Intro'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="bg-red-600">
      <Nav/>
      <Intro/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App
