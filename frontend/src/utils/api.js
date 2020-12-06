export async function getProfiles() {
    const response = await fetch("http://localhost:5000/profile");
    const profiles = await response.json();
    return profiles;
}

export async function getLikes() {
    const response = await fetch("http://localhost:5000/like");
    const likes = await response.json();
    return likes;
}
