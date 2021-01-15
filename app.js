const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=64de763c2d8dd189798c1968ea7b72de&query=37.8267,-122.4233&units=m'

request({url: url, json: true}, (error, response) => {
console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. it feels like ' + response.body.current.feelslike + ' degrees out.' )
})