import React from 'react'


export const Nav = () => {
  return (
    <section class="flex flex-row justify-between mx-8 pt-4 ">
      <a class="basis-1/3" href=""><img class=" max-w-48 " src="../../public/pokelogo.com.png" alt="Pokemon-Logo"/></a>
      <nav class="basis-1/2 font-mono text-md py-8">
        <ul class="flex flex-row justify-evenly ">
          <button >Region</button>
          <button class="flex items-center">Types
            <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
          </button>  
          <div class="flex rounded-xl border-1  bg-red-100 hover:border-1 hover:border-blue-800">
            <img class="mx-2 my-1 w-5" src="../../public/search.svg" alt="" />
            <input class=" bg-red-100 rounded-xl " type="text" placeholder='Search pokemon' />
          </div>
        </ul>
      </nav>
      



    </section>
  )
}
