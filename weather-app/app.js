const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const location = process.argv[2]; //get from user input

if (!location) return console.log("No location");
if (location) {
    geocode(location, (err,  {latitude, longitude, location}) => {
        if (err) return console.log(err);
        
        forecast(latitude, longitude, (err, forecastdata) => {
            if (err) return console.log(err);
            console.log(location);
            console.log(forecastdata);
        });
        
    })
}