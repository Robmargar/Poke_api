import React from 'react'
import { Card } from './Card'
import pokemons from "../assets/pokemons.json"
export const Cards = () => {
 
  return (
    <section class="grid grid-cols-5 ">
      {
        pokemons.map((p)=>(
           <Card
              id={p.id}
              name={p.name}
              imagen={p.imagen}
           />

          )        
        )
      }
    </section>
  )
}
