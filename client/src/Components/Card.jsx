import React from 'react'

export const Card= () => {
  return (
    <article class="bg-yellow-500 rounded-2xl shadow-lg shadow-indigo-400/40 hover:shadow-blue-800/80 w-60 h-72 mx-2 my-4 p-2">
        <div class="flex flex-col-2 justify-evenly my-2">
          <h1 class='font-mono text-xl'> PIKACHU</h1>
          <h1 class='font-mono text-xl'> 25 </h1>
        </div>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" alt="pikachu-image" />
    </article>
  )
}
