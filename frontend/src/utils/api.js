export async function getProfiles() {
    const response = await fetch("http://localhost:5000/profiles", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response.json();
}

export async function getLikedProfiles(profileId) {
    const response = await fetch(`http://localhost:5000/likes/${profileId}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response.json();
}

export async function callApi() {
    const response = await fetch("http://localhost:5000/");
    console.log(response);
    const text = await response.text();
    console.log(text);
    return text;
}

