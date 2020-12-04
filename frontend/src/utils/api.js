export async function submitProfile(name, school, year, age, gender, major, phoneNumber, fbUsername, igUsername, scUsername, email, housingType, numRoommates, shortDesc, longDesc, quizAnswers) {
    
    const response = await fetch("http://localhost:5000/createProfile", {
        method: 'POST',
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

