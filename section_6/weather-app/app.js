const request = require('postman-request')
const geocode = require('./utils/geocode')

/* const url = "http://api.weatherstack.com/current?access_key=45eccb002580883052488f7a4a063ed3&query=Bogota&units=m"

request({url: url, json: true}, (error, response) => {

    if(error){
        console.log(error)
    }else if(response.body.error){
        console.log("Error on body"+ response.body.error)
    }else{
        const current = response.body.current
        console.log(current.weather_descriptions[0])
        console.log("It is currently " + current.temperature + 'º out. There is a ' + current.precip + '% chance of rain')
    }
    
})
*/

geocode('Medellin', (error, data) => {
    console.log(error)
    console.log(data)
})