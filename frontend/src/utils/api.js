export async function getLikedProfiles(profileId) {
    const response = await fetch(`http://localhost:5000/likes/${profileId}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response.json();
}

export async function deleteLiked(userId, likedUser) {
    const response = await fetch(`http://localhost:5000/likes/${userId}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "likedUser": likedUser
        })
    });
}



