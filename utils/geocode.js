const request = require('request')


const geocode = (address, callback) => {

    const url ='https://api.mapbox.com/geocoding/v5/mapbox.places/' + address +'.json?access_token=pk.eyJ1IjoiZ2JvbGFoYW43IiwiYSI6ImNrankxcDJuOTAzbWIydm1lZjd3Ymo5cTMifQ._SOHb3_fHv-bds-CALXebQ&limit=1'

    request({url: url, json: true}, (error, response) => {
        if(error) {
           callback('unable to connect to location services')
        } else if (response.body.features.length == 0) {
           callback('Unable to find location. Try another search')
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
   }

   module.exports = geocode;