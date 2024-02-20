import { useState } from 'react'
import { Carousel } from './Carousel'
import {ChevronLeft, ChevronRight} from 'react-feather'



const slides=[
  '../../public/team.png',
  '../../public/img2.png',
  '../../public/img3.png',
  '../../public/img4.png',
  '../../public/img5.png',
]

export const Intro = () => {
  const [curr,setCurr]=useState(0)
  return (
    <div class="flex justify-center relative rounded-2xl border-yellow-600 border-4 bg-gradient-to-b from-red-600 from-10% via-blue-500 via-80% to-blue-600 to-90% mx-2">
      <Carousel>
      {
        slides.map((s)=>(<img src={s}/>))
      }
      </Carousel>
      <div class="flex items-center  absolute justify-between inset-0 p-4">
            <button class=" rounded-full shadow bg-white/80 hover:bg-white p-1">
                <ChevronLeft size={40}/>
            </button>
            <button class=" rounded-full shadow bg-white/80 hover:bg-white p-1">
                <ChevronRight size={40}/>
            </button>
        </div>
    </div>

  )
}
