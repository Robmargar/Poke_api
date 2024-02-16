import React from 'react'

export const Nav = () => {
  return (
    <div class="flex flex-row justify-between mx-8 mt-4">
      <a class="basis-1/3" href=""><img class=" max-w-48 " src="../../public/pokelogo.com.png" alt="Pokemon-Logo"/></a>
      <nav class="basis-1/2 font-mono text-md py-8">
        <ul class="flex flex-row justify-evenly ">
          <li >Region</li>
          <li >Types</li>      
          <div class="rounded-xl">
            <input type="text" />
            <button>Buscar</button>
          </div>
        </ul>
      </nav>
    </div>
  )
}
