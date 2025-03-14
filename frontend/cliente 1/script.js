// Cuando alguien hace clic en "Sign Up", queremos mostrar el formulario de registro
document.getElementById('signupBtn').addEventListener('click', () => {
    document.getElementById('signupSection').style.display = 'block'; // Mostramos el formulario de registro
    
    
    
    document.getElementById('signinSection').style.display = 'none'; // Ocultamos el de inicio de sesión
});

// Si hacen clic en "Sign In", entonces mostramos el formulario de inicio de sesión en su lugar
document.getElementById('signinBtn').addEventListener('click', () => {
     document.getElementById('signinSection').style.display = 'block'; // Mostramos el formulario de inicio de sesión
        document.getElementById('signupSection').style.display = 'none'; // Ocultamos el de registro
});

// Cuando alguien decide registrarse, tomamos la información y la enviamos al servidor
document.getElementById('confirmSignup').addEventListener('click', async () => {
    const username = document.getElementById('signupUser').value; // Tomamos el nombre de usuario
    const password = document.getElementById('signupPass').value; // Tomamos la contraseña

    // Enviamos los datos al servidor para que registre la nueva cuenta
    const response = await fetch('http://localhost:8000/auth/register', {
        method: 'POST', // Indicamos que estamos enviando datos
        headers: { 'Content-Type': 'application/json' }, // Le decimos que los datos están en formato JSON
        body: JSON.stringify({ username, password }) // Convertimos los datos en texto JSON para enviarlos
    });

    // Recibimos la respuesta del servidor y mostramos un mensaje bonito con la información
    const data = await response.json();
    alert(data.message);
});

// Cuando alguien quiere iniciar sesión, enviamos sus datos al servidor para comprobar si son correctos
document.getElementById('confirmSignin').addEventListener('click', async () => {
    
    const password = document.getElementById('signinPass').value;
    const username = document.getElementById('signinUser').value; // Tomamos el nombre de usuario
    
     // Tomamos la contraseña

    // Enviamos los datos al servidor para iniciar sesión
    const response = await fetch('http://localhost:8000/auth/login', {
        method: 'POST', // Indicamos que estamos enviando datos
        headers: { 'Content-Type': 'application/json' }, // Indicamos que el contenido es JSON
        body: JSON.stringify({ username, password }) // Convertimos los datos en JSON para enviarlos
    });

    // Recibimos la respuesta del servidor
    const data = await response.json();

    // Si los datos son correctos, mostramos la sección para publicar
    if (response.ok) {
        document.getElementById('createPostSection').style.display = 'block'; // Dejamos visible el área para escribir un post
        document.getElementById('signinSection').style.display = 'none'; // Ocultamos el formulario de inicio de sesión
    } 
    
});

// Si alguien quiere compartir algo bonito con el mundo, tomamos su post y lo enviamos al servidor
document.getElementById('uploadPost').addEventListener('click', async () => {
    const title = document.getElementById('postHeader').value;

    // Imagen para acompañar la publicación
    const imageUrl = document.getElementById('postImageLink').value; // Título del post
    const description = document.getElementById('postContent').value; // Descripción o mensaje bonito
     
    const username = document.getElementById('signinUser').value; // Quién está publicando

    // Enviamos los datos del post al servidor para guardarlo y mostrarlo a los demás
    const response = await fetch('http://localhost:8000/posts/create', {
        method: 'POST', // Indicamos que estamos enviando datos
        headers: { 'Content-Type': 'application/json' }, // Indicamos que el contenido es JSON
        body: JSON.stringify({ username, title, description, imageUrl }) // Convertimos los datos en JSON para enviarlos
    });

    // Recibimos la respuesta del servidor y mostramos un mensaje con lo que pasó
    const data = await response.json();
         alert(data.message);
});
