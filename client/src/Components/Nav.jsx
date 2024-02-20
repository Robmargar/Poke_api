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
          <div class="rounded-xl">
            <input type="text" />
            <button>Buscar</button>
          </div>
        </ul>
      </nav>
      



    </section>
  )
}
