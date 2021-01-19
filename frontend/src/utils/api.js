import queryString from 'query-string'

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
    })
}

export async function loadProfile() {
    const response = await fetch(`http://localhost:5000/profilepage/`, {
        credentials: 'include',
    });
   
    const text = await response.json();
    return text;
 }
 export async function updateProfile(name, school, year, age, gender, major, phoneNumber, fbUsername, igUsername, scUsername, email, housingType, numRoommates, shortDesc, longDesc, quizAnswers) {
    
    
    const response = await fetch("http://localhost:5000/updateProfile", {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            "name": name,
            "school": school,
            "year": year,
            "age": age,
            "gender": gender,
            "major": major,
            "phoneNumber": phoneNumber,
            "fbUsername" : fbUsername,
            "igUsername" : igUsername,
            "scUsername" : scUsername,
            "email" : email,
            "housingType" : housingType,
            "numRoomates" : numRoommates,
            "shortDesc" : shortDesc,
            "longDesc" : longDesc,
            "quizAnswers" : quizAnswers
        })
    });
}

export async function submitProfile(name, school, year, age, gender, major, phoneNumber, fbUsername, igUsername, scUsername, email, housingType, numRoommates, shortDesc, longDesc, quizAnswers) {
    
    const response = await fetch("http://localhost:5000/profiles", {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            "name": name,
            "school": school,
            "year": year,
            "age": age,
            "gender": gender,
            "major": major,
            "phoneNumber": phoneNumber,
            "fbUsername" : fbUsername,
            "igUsername" : igUsername,
            "scUsername" : scUsername,
            "email" : email,
            "housingType" : housingType,
            "numRoomates" : numRoommates,
            "shortDesc" : shortDesc,
            "longDesc" : longDesc,
            "quizAnswers" : quizAnswers
        })
    });
}

export async function register(username, password) {    
    return await fetch("http://localhost:5000/auth/register", {        
        method: 'POST',        
        headers: {            
            'Content-Type': 'application/json'        
        },        
        body: JSON.stringify({
            "username": username,
            "password": password
        })   
    });
}

export async function getProfiles(filters) {
    const queryStr = queryString.stringify(filters)
    const response = await fetch(`http://localhost:5000/profiles?${queryStr}`);
    const profiles = await response.json();
    return profiles;
}

export async function login(username, password) {    
    return await fetch("http://localhost:5000/auth/login", {        
        method: 'POST',        
        credentials: 'include',
        method: 'POST',
        credentials: 'include',        
        headers: {            
            'Content-Type': 'application/json'        
        },        
        body: JSON.stringify({
            "username": username,
            "password": password,
        })   
    });
}