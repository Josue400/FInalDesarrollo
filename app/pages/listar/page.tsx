"use client";
import React, { useState } from 'react';
import axios from 'axios';
import { Datos }  from '../../interfaces/datos'

const Consulta = () => {
    const [DataObtenida, setDato] = useState<Datos[]>([]);

    const Consultar = () => {
        axios.get<Datos[]>('/api/user')
          .then(response => {
            setDato(response.data);
            console.log(response.data) 
          })
          .catch(error => {
            console.error("Error al obtener el dato:", error);
          });
      };
        

    return (
        /* */
        <>
        <div>
        <h1>Consulta de Datos</h1>
        <div>
          <button onClick={Consultar}>Consultar</button>
        </div>
  
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>fecha</th>
              <th>lastname</th>
              <th>Nombre</th>
             
              <th>Genero</th>
              <th>fecha_nacimiento</th>
              <th>estado</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {DataObtenida.map(dato => (
              <tr key={dato.id}>
                <td>{dato.id}</td>
                <td>{dato.name}</td>
                <td>{dato.lastname}</td>
                <td>{dato.Genero}</td>
                <td>{dato.fecha_nacimiento}</td>
                <td>{dato.estado}</td>
                <td>{dato.email}</td>
              </tr>
            ))}
          </tbody>
        </table> 
        </div> 
        </>

    )
}

export default Consulta