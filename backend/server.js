// Importamos las librerías necesarias para el servidor
const express = require('express'); // Express nos permite crear un servidor web en Node.js
const bodyParser = require('body-parser'); // body-parser nos ayuda a leer datos enviados en formato JSON
const cors = require('cors'); // cors permite que otros sitios web puedan comunicarse con nuestro servidor

// Importamos las rutas que manejan la autenticación de usuarios y los posts
const authRoutes = require('./routes/auth'); // Rutas para el registro e inicio de sesión de usuarios
const postsRoutes = require('./routes/posts'); // Rutas para la creación y obtención de posts

// Creamos una instancia de Express para nuestro servidor
const app = express();

// Definimos un puerto en el que se ejecutará nuestro servidor
const PORT = 8000;

// Habilitamos CORS para permitir que el frontend se comunique con nuestro backend
app.use(cors());

// Habilitamos body-parser para que el servidor pueda entender y procesar JSON en las solicitudes
app.use(bodyParser.json());

// Definimos que todas las rutas relacionadas con autenticación (registro, login) usen authRoutes
app.use('/auth', authRoutes);

// Definimos que todas las rutas relacionadas con posts usen postsRoutes
app.use('/posts', postsRoutes);

// Iniciamos el servidor en el puerto definido
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`); // Mensaje en consola para indicar que el servidor está activo
});
