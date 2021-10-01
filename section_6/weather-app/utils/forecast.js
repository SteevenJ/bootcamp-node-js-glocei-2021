const request = require("postman-request")

const forecast = (lat, long, callback) => {

    const url = "http://api.weatherstack.com/current?access_key=45eccb002580883052488f7a4a063ed3&query="+long+","+lat+"&units=m"

    request({url: url, json: true}, (error, response) => {
        if(error){
            callback(error, undefined)
        }else if(response.body.error){
            callback("Error on body"+ response.body.error.info, undefined)
        }else{
            const current = response.body.current
            if(current.length == 0){
                callback("Coordinates not found")
            }else{
                callback(undefined, current.weather_descriptions[0] + " .It is currently " + current.temperature + 'º out. There is a ' + current.precip + '% chance of rain')
            }
        }
    })
}

module.exports = forecast