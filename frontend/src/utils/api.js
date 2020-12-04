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

