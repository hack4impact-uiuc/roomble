export async function loadProfile(userid) {
    const response = await fetch(`http://localhost:5000/profilepage/${userid}`);
   
    const text = await response.json();
    console.log(text)
    return text;
 }
 