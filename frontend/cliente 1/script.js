document.getElementById('signupBtn').addEventListener('click', () => {
    document.getElementById('signupSection').style.display = 'block';
    document.getElementById('signinSection').style.display = 'none';
});

document.getElementById('signinBtn').addEventListener('click', () => {
    document.getElementById('signinSection').style.display = 'block';
    document.getElementById('signupSection').style.display = 'none';
});

document.getElementById('confirmSignup').addEventListener('click', async () => {
    const username = document.getElementById('signupUser').value;
    const password = document.getElementById('signupPass').value;

    const response = await fetch('http://localhost:8000/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    const data = await response.json();
    alert(data.message);
});

document.getElementById('confirmSignin').addEventListener('click', async () => {
    const username = document.getElementById('signinUser').value;
    const password = document.getElementById('signinPass').value;

    const response = await fetch('http://localhost:8000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    const data = await response.json();
    if (response.ok) {
        document.getElementById('createPostSection').style.display = 'block';
        document.getElementById('signinSection').style.display = 'none';
    } else {
        alert(data.message);
    }
});

document.getElementById('uploadPost').addEventListener('click', async () => {
    const title = document.getElementById('postHeader').value;
    const description = document.getElementById('postContent').value;
    const imageUrl = document.getElementById('postImageLink').value;
    const username = document.getElementById('signinUser').value;

    const response = await fetch('http://localhost:8000/posts/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, title, description, imageUrl })
    });

    const data = await response.json();
    alert(data.message);
});
