export async function getProfiles() {
    const response = await fetch("http://localhost:5000/");
    console.log(response);
    const profiles = await response.json();
    return profiles;
}

/*
export async function makePost() {
    const response = await fetch("http://localhost:5000/", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "Name": name,
            "Price": price,
            "ShortDescription": shortDescription,
            "LongDescription": longDescription,
            "Ingredients": ingredients,
            "URL": url
        })      
    });
}
*/

// export async function backend() {
//     const response = await fetch("http://localhost:5000/objects");
//     console.log(response);
//     const text = await response.text();
//     return text;
// }