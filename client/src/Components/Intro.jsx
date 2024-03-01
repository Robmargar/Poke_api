import { useEffect, useState } from 'react'
import {ChevronLeft, ChevronRight} from 'react-feather'



const slides=[
  '../../public/img5.png',
  '../../public/img2.png',
  '../../public/img3.png',
  '../../public/img4.png',
  '../../public/team.png',
]

export const Intro = ( {autoSlide= false, autoSlideInterval=3000}) => {
  const [curr,setCurr]=useState(0)
  const prev=()=>setCurr((curr)=>(curr===0 ? slides.length-1:curr-1));
  const next=()=>setCurr((curr)=>(curr=== slides.length-1 ? 0:curr+1));

  useEffect(()=>{
    if(!autoSlide) return
    const slideInterval=setInterval(next,autoSlideInterval)
    return ()=>clearInterval(slideInterval)
  },[])

  return (
    <div class="flex justify-center relative rounded-2xl border-yellow-600 border-4 bg-gradient-to-b from-red-600 from-10% via-blue-500 via-80% to-blue-600 to-90% mx-2">
        <div class="overflow-hidden relative max-w-xs my-10 ">
          <div class="flex transition-transform ease-out duration-500 " style={{transform:`translateX(-${curr*100}%)`}}>
            {slides.map((s)=>(<img src={s}/>))}
          </div>
        </div>

        <div class="flex absolute items-center justify-between inset-0 p-4">
            <button onClick={prev} class=" rounded-full shadow bg-white/80 hover:bg-white p-1">
                <ChevronLeft size={40}/>
            </button>
            <button onClick={next} class=" rounded-full shadow bg-white/80 hover:bg-white p-1">
                <ChevronRight size={40}/>
            </button>
        </div>
        
        <div class="flex absolute items-center justify-center bottom-4 right-0 left-0 gap-4 ">
            {slides.map((_,i)=>(
              <div class={` transition-all w-3 h-3 bg-white rounded-full ${curr===i ? "p-2": "bg-opacity-50"}`}/>
            ))}
        </div>
    </div>

  )
}
