const request = require('postman-request')

const url = "http://api.weatherstack.com/current?access_key=45eccb002580883052488f7a4a063ed3&query=New%20York"

request({url: url}, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})