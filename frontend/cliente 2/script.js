async function loadUsers() {
    const response = await fetch('http://localhost:8000/auth/users');
    const usernames = await response.json();
    const usersDiv = document.getElementById('userList');
    usersDiv.innerHTML = '<h2>Active Members</h2>';

    if (usernames.length > 0) {
        usersDiv.innerHTML += `<ul>${usernames.map(username => `<li>${username}</li>`).join('')}</ul>`;
    } else {
        usersDiv.innerHTML += '<p>No users available.</p>';
    }
}

async function loadPosts() {
    const response = await fetch('http://localhost:8000/posts/all');
    const posts = await response.json();
    const postsDiv = document.getElementById('postList');
    postsDiv.innerHTML = '<h2>Recent Posts</h2>';

    posts.forEach(post => {
        postsDiv.innerHTML += `
            <div class="feedPost">
                <h3>${post.title}</h3>
                <p><strong>By:</strong> ${post.username}</p>
                <p>${post.description}</p>
                <img src="${post.imageUrl}" alt="${post.title}" style="max-width: 100%; height: auto;">
            </div>
            <hr>
        `;
    });
}

loadUsers();
loadPosts();
