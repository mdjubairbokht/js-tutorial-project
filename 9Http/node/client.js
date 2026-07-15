
const url = 'http://127.0.0.1:3000/';

async function makeGetRequest() {
        const res = await fetch(url);
        const text = await res.text();
        console.log(text)
}

async function makePostRequest() {
    const response = await fetch(url, {
        ..
    })
    const responseBody = await response.json();
    console.log('POST status:', response.status);
    console.log('POST body:', responseBody);    
}

makePostRequest()
