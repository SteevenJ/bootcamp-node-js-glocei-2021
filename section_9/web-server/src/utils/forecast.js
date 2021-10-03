const request = require("postman-request")

const forecast = (lat, long, callback) => {

    const url = "http://api.weatherstack.com/current?access_key=45eccb002580883052488f7a4a063ed3&query="+lat+","+long+"&units=m"

    request({url, json: true}, (error, { body }) => {
        if(error){
            callback(error, undefined)
        }else if(body.error){
            callback("Error on body"+ body.error.info, undefined)
        }else{
            const current = body.current
            if(current.length == 0){
                callback("Coordinates not found", undefined)
            }else{
                callback(undefined, current.weather_descriptions[0] + " .It is currently " + current.temperature + 'º out. There is a ' + current.precip + '% chance of rain')
            }
        }
    })
}

module.exports = forecast