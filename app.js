const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('¡Bienvenido a mi aplicación Express!');
});

app.get('/clientes', (req, res) => {
  const clientes = [
    {
      nombre: 'Juan Pérez',
      dni: '12345678',
      correo: 'juan.perez@gmail.com'
    },
    {
      nombre: 'María Paula',
      dni: '98765432',
      correo: 'maria.pau@gmail.com'
    },
    {
      nombre: 'Carlos Rodríguez',
      dni: '54321678',
      correo: 'car.rodriguez@gmail.com'
    }
  ];
  res.json(clientes);
});
// Ruta para mostrar 3 productos
app.get('/productos', (req, res) => {
  const productos = [
    {
      nombre: 'Camisa de algodón',
      precio: 55.90,
      categoria: 'Ropa'
    },
    {
      nombre: 'Zapatillas deportivas',
      precio: 150.90,
      categoria: 'Calzado'
    },
    {
      nombre: 'Portátil HP',
      precio: 1300.90,
      categoria: 'Electrónica'
    }
  ];
  res.json(productos);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log('Servidor Express corriendo en el puerto ${PORT}');
});