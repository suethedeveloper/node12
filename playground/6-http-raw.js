/** core node module without request library just for reference */
const https= require("https");
const url = "https://api.darksky.net/forecast/d45ba786571a346f69a6bfb4cf7604ef/37.6604,-122.8758";

const request = https.request(url, response => {
    let data = "";
    response.on("data", chunk => {
        data = data + chunk.toString();
    })

    response("end", () => {
        const body = JSON.parse(data);
        console.log(body);
    })
})

request.on("error", err => {
    console.log("An error ", err);
})
request.end();