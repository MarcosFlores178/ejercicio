
import React from 'react';

// Componente que recibe una lista de contactos y los muestra en una lista
const ListaContactos = ({ lista }) => {
  return (
    <ul className="lista-contactos">
      {lista.map(contacto => (
        <li key={contacto.id}>
          {contacto.nombre} - {contacto.edad} - {contacto.email} - {contacto.telefono}
        </li>
      ))}
    </ul>
  )
}

export default ListaContactos;
// Este componente recibe una lista de contactos como props y los muestra en una lista desordenada.
