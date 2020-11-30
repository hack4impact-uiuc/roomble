export async function getProfiles() {
    console.log("Hi");
    const response = await fetch("http://localhost:5000/profile");
    console.log(response);
    const profiles = await response.json();
    console.log(profiles);
    console.log("Hi");
    return profiles;
}
