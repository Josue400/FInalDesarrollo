"use client";
import React, { useState } from 'react';
import axios from 'axios';
import { Datos } from '../../interfaces/datos'; // Asegúrate de ajustar la ruta si la interfaz está en otra carpeta

const AgregarProveedor = () => {
  // Estado para almacenar los datos del proveedor
  const [dato, setDato] = useState<Datos>({
    name: '', 
    lastname:'',
    Genero: '',
    fecha_nacimiento: '',
    email:'',
    estado: '',
  });

  // Maneja el cambio de datos en el formulario
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setDato({
      ...dato,
      [name]: value // Actualiza el campo correspondiente en el estado
    });
  };

  // Envía los datos del proveedor mediante una solicitud POST
  const agregarProveedor = () => {
    axios.post('/api/user', dato)
      .then(response => {
        console.log("Usuario Agregado:", response.data);
      })
      .catch(error => {
        console.error("Error al agregar el usuario:", error);
      });
  };

  return (
    <div>
      <h1>Agregar Usuario</h1>
      <form onSubmit={(e) => { e.preventDefault(); agregarProveedor(); }}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="name" // Cambiado a "name" para coincidir con el estado
            value={dato.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Apellido:</label>
          <input
            type="apellido" // Cambiado a "email" para coincidir con el estado y mejorar semántica
            name="apellido" // Cambiado a "email" para coincidir con el estado
            value={dato.lastname}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Genero:</label>
          <input
            type="Genero" // Cambiado a "email" para coincidir con el estado y mejorar semántica
            name="Genero" // Cambiado a "email" para coincidir con el estado
            value={dato.Genero}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Fecha nacimiento DD-MM-YYYY:</label>
          <input
            type="FECHA DE NACIMIENTO" // Cambiado a "email" para coincidir con el estado y mejorar semántica
            name="FECHA DE NACIMIENTO" // Cambiado a "email" para coincidir con el estado
            value={dato.fecha_nacimiento}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Estado:</label>
          <input
            type="Estado" // Cambiado a "email" para coincidir con el estado y mejorar semántica
            name="Estado" // Cambiado a "email" para coincidir con el estado
            value={dato.estado}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email" // Cambiado a "email" para coincidir con el estado y mejorar semántica
            name="email" // Cambiado a "email" para coincidir con el estado
            value={dato.email}
            onChange={handleChange}
          />
        </div>
    
        <button type="submit">Agregar Usuario</button>
      </form>
    </div>
  );
}

export default AgregarProveedor;