export async function getLikedProfiles() {
    const response = await fetch(`http://localhost:5000/likes`, {
        method: "GET",
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response.json();
}

export async function likeProfile(likedUser) {
    const response = await fetch(`http://localhost:5000/likes`, {
        method: "POST",
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "likedUser": likedUser
        })
    });
}

export async function getProfiles() {
    const response = await fetch("http://localhost:5000/profile");
    const profiles = await response.json();
    return profiles;
}

export async function login(username, password) {    
    return await fetch("http://localhost:5000/auth/login", {        
        method: 'POST',        
        headers: {            
            'Content-Type': 'application/json'        
        },        
        body: JSON.stringify({
            "username": username,
            "password": password,
        })   
    });
}