export async function callApi() {
    const response = await fetch("http://localhost:5000/");
    console.log(response);
    const text = await response.text();
    console.log(text);
    return text;
}

export async function login(username, password) {    
    const response = await fetch("http://localhost:5000/login", {        
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

