import { useState } from 'react'

export const Carousel = ({children:slides}) => {
  return (
    <div class="overflow-hidden relative max-w-lg">
        <div class="flex">{slides}</div>

    </div>
  )
}
