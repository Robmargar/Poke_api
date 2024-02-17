
export const Footer = () => {
  return (
    <section class=" bg-red-800  border-double border-yellow-600 border-y-8 mt-6 p-2" >
     <div class="grid grid-cols-3 ">
     <hr class="h-px my-8 bg-amarillo border-0"/>
      <ul class='flex space-x-5 justify-center m-4'>
        <li>
          <a href="https://github.com/Robmargar/Poke_api" target="_blank" rel='noreferrer'>
            <img class='w-10 ' src="../../public/github-am.svg" alt="GitHub" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/roberto-mart%C3%ADnez-52ba10215/" target="_blank" rel='noreferrer'>
            <img class='w-10' src="../../public/linkedin-am.svg" alt="LinkedIn" />
          </a>
        </li>
        <li>
          <a href="https://github.com/Robmargar" target="_blank" rel='noreferrer'>
            <img class='w-10' src="../../public/mail-am.svg" alt="Curriculum" />
          </a>
        </li>
      </ul>
      <hr class="h-px my-8 bg-amarillo border-0"/>
     </div>
     <span class="flex justify-center text text-naranja mb-4 "> Creado y Diseñado por Roberto Martínez García</span>
    </section>
  )
}
