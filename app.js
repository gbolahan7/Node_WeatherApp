const request = require('request');
const geocode = require('./utils/geocode');

// const url = 'http://api.weatherstack.com/current?access_key=64de763c2d8dd189798c1968ea7b72de&query=&units=m' 

// request({url: url, json: true}, (error, response) => {

//     if (error) {
//         console.log('Unable to connect to the Weather service')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     }
//     else {
//         console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. it feels like ' + response.body.current.feelslike + ' degrees out.' )
//     }
// })


// const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZ2JvbGFoYW43IiwiYSI6ImNrankxcDJuOTAzbWIydm1lZjd3Ymo5cTMifQ._SOHb3_fHv-bds-CALXebQ&limit=1'

// request({url: url, json: true}, (error, response) => {
   

//     if (error) {
//         console.log('Unable to connect to the location API')
//     } else if (response.body.features.length === 0 ) {
//         console.log('No matching terms')
//     }else {
//         const latitude = response.body.features[0].center[1];
//         const longitude = response.body.features[0].center[0];
//         console.log(latitude, longitude)
//     }
   
// })


geocode('Ontario', (error, data) => {
console.log('Error', error)
console.log('Data', data)
})