import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="h-full flex flex-col items-center">
      <div className="text-3xl font-bold text-blue-950 mx-10 text-justify my-10 md:text-6xl">CAMPUS CONNECT</div>
      <div className="text-justify font-base text-gray-900 text-lg mx-10 lg:mx-60 md:text-3xl">Una iniciativa de <b>ESPOL</b> para transformar tu experiencia académica. <b>Campus Connect</b> es tu portal integral que reúne todos los recursos, servicios y herramientas que necesitas para navegar con éxito por la vida universitaria. Diseñado pensando en ti, Campus Connect te brinda un acceso más sencillo, una comunicación efectiva y un camino hacia el <b>éxito académico</b> en ESPOL.</div>
      <div className="font-semibold mt-10 mb-4 text-lg text-gray-900 md:text-4xl">Pronto por:</div>
      <div className="grid grid-cols-2 gap-4 items-center justify-items-center">
        <div className="h-16 w-36 flex justify-center md:h-32 md:w-64">
            <img class="-mx-12 -my-3" src="https://www.logo.wine/a/logo/Google_Play/Google_Play-Icon-Logo.wine.svg" alt="" />
        </div>
        <div className="h-16 w-16 flex justify-center md:h-32 md:w-64 md:p-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/App_Store_%28iOS%29.svg/2048px-App_Store_%28iOS%29.svg.png" alt="" />
        </div>
      </div>    
    </div>
  )
}

export default App
