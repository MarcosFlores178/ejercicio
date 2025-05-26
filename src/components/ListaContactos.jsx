
import React from 'react';
import './listaContactos.css';

// Componente que recibe una lista de contactos y los muestra en una lista
const ListaContactos = ({ lista }) => {
  return (
    <div className="lista-contactos-container">
      
      <ul className="lista-contactos">
        {lista.map(contacto => (
          <li key={contacto.id}>
            {contacto.nombre} - {contacto.edad} - {contacto.email} - {contacto.telefono}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListaContactos;

