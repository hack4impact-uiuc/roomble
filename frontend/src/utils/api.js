export async function getLikedProfiles(profileId) {
    const response = await fetch(`http://localhost:5000/likes/${profileId}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response.json();
}
