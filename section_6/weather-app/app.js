const request = require('postman-request')

const url = "http://api.weatherstack.com/current?access_key=45eccb002580883052488f7a4a063ed3&query=Bogota&units=m"

request({url: url, json: true}, (error, response) => {
    //console.log()

    const current = response.body.current
    console.log(current.weather_descriptions[0])
    console.log("It is currently " + current.temperature + 'º out. There is a ' + current.precip + '% chance of rain')
})