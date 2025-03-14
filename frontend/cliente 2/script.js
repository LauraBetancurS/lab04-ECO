// 🌸 Esta función carga la lista de usuarios registrados y los muestra en la página
async function loadUsers() {
    // Hacemos una petición al servidor para obtener los usuarios registrados
    const response = await fetch('http://localhost:8000/auth/users');
    
    // Convertimos la respuesta en formato JSON para poder trabajar con ella
    const usernames = await response.json();
    
    // Buscamos el contenedor en la página donde mostraremos los usuarios
    const usersDiv = document.getElementById('userList');

    // Agregamos un título a la lista de usuarios
    usersDiv.innerHTML = '<h2>Active Members</h2>';

    // Si hay usuarios registrados, los mostramos en una lista ordenada
    if (usernames.length > 0) {
        usersDiv.innerHTML += `<ul>${usernames.map(username => `<li>${username}</li>`).join('')}</ul>`;
    } else {
        // Si no hay usuarios, mostramos un mensaje bonito en su lugar
        usersDiv.innerHTML += '<p>No users available.</p>';
    }
}

// 💖 Esta función carga todas las publicaciones que los usuarios han subido
async function loadPosts() {
    // Pedimos al servidor la lista de posts creados por los usuarios
    const response = await fetch('http://localhost:8000/posts/all');
    
    // Convertimos la respuesta en formato JSON para poder mostrarla en la página
    const posts = await response.json();
    
    // Buscamos el contenedor donde vamos a mostrar los posts
    const postsDiv = document.getElementById('postList');

    // Agregamos un título para la sección de publicaciones
    postsDiv.innerHTML = '<h2>Recent Posts</h2>';

    // Recorremos cada post recibido y lo agregamos a la página con su contenido
    posts.forEach(post => {
        postsDiv.innerHTML += `
            <div class="feedPost">
                <h3>${post.title}</h3> <!-- Título del post -->
                <p>By: ${post.username}</p> 
                <p>${post.description}</p> <!-- Descripción del post -->
                <div class="postImage">
                <img   src="${post.imageUrl}" alt="${post.title}"margin: auto; style="max-width: 100%; height: auto;" > <!-- Imagen del post -->
                </div>
            </div>
            
        `;
    });
}

// ✨ Llamamos estas funciones para que los usuarios y posts se carguen automáticamente cuando abrimos la página
loadUsers();
loadPosts();
