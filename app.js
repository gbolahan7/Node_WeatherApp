const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=64de763c2d8dd189798c1968ea7b72de&query=37.8267,-122.4233'

request({url: url}, (error, response) => {
const data = JSON.parse(response.body)
console.log(data.current);
})