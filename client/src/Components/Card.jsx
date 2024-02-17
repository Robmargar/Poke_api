import React from 'react'

export const Card= ({id,name,imagen}) => {
  return (
    <button class="bg-yellow-500 rounded-2xl shadow-lg shadow-indigo-400/40 border-white border-4 hover:shadow-blue-800/80 hover:rotate-1 hover:translate-y-1 max-w-60 min-w-48 h-72 mx-2 my-4 p-2">
        <div class="flex flex-col-2 justify-evenly my-2">
          <h1 class='font-mono text-xl'>{name}</h1>
          <h1 class='font-mono text-xl'>{id} </h1>
        </div>
        <img src={imagen} alt= {`${name}-image`} />
    </button>
  )
}
