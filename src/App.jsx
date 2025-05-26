import { useState } from 'react'

import './App.css'
import ListaContactos from './components/listaContactos'

function App() {
  //Array de objetos
 
  const [lista, setLista] = useState([])

  
  //Funcion para agregar un objeto a la lista
  const agregarNuevoContacto = () => {
    const contactos = {
      id: Date.now(),
      nombre: 'Juan',
      edad: 25,
      email: 'juan@gmail.com',
      telefono: '123456789'
    }
    
    setLista([...lista, contactos])
  }

  return (
    <>
    
    <h1>Lista de contactos</h1>
      {/* <input type="text" placeholder="Nombre" />
      <input type="number" placeholder="Edad" />
      <input type="email" placeholder="Email" /> */}
      <button onClick={agregarNuevoContacto}>
        Agregar contacto
      </button>
      {/* Este es el componente que recibe la lista de contactos y los muestra (hay que combinarlo con el componente del grupo B): */}
      <h2>Contactos</h2>
      <ListaContactos lista={lista} />
    </>
  )
}

export default App
