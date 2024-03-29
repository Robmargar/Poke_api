import React from 'react'


export const Details= () => {
  return (
    <section class=" w-3/4  h-2/3 rounded-2xl bg-cover bg-no-repeat p-4 bg-[url('../../public/pokedex.png')] ">
        <div class="flex justify-center">
          <h1> Nombre</h1>
          <h1> Numero pokedex</h1>
        </div>
        <img class="w-80" src="../../public/pokedex.png" alt="imagen pokemon" />
        <div>
          <h1> altura</h1>
          <h1> peso</h1>
          <p>tipo</p>
          <p>movimientos</p>
        </div>
    </section>
  )
}
