export async function callApi() {
    const response = await fetch("http://localhost:5000/");
   
    const text = await response.json();
    console.log(text)
    return text;
 }
 