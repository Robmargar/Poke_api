import React from 'react'

export const Card= ({id,name,imagen}) => {
  return (
    <section class=" group relative items-center overflow-hidden cursor-pointer ">
      <div class="bg-yellow-500 rounded-2xl shadow-lg shadow-indigo-400/40 border-white border-4 h-72 hover:shadow-blue-800/80 hover:rotate-1 hover:translate-y-1  max-w-60 min-w-48 mx-2 my-4">
          <img class="h-full w-full object-cover pb-5" src={imagen} alt= {`${name}-image`} />

          <section class=" translate-y-[200%] group-hover:-translate-y-64 transition-all ">
            <header class="flex flex-col-2 justify-evenly">
              <h1 class='font-mono text-xl'>{name}</h1>
              <h1 class='font-mono text-xl'>{id} </h1>
            </header>  
            <div class="grid grid-rows-4 justify-evenly mt-4">
              <h1> Altura: 2.5 m </h1>
              <h1> Peso: 50 kg</h1>
              <p>Tipo: Planta Veneno</p>
              <p>Movimientos:</p>
           </div>
          </section>
      </div>
    </section>
  )
}
