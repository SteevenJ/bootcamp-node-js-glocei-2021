const request = require('postman-request')

const url = "http://api.weatherstack.com/current?access_key=45eccb002580883052488f7a4a063ed3&query=Bogota&units=m"

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

//Geocoding
// Address ->Lat/Ling -> Weather

const urlGC = "https://api.mapbox.com/geocoding/v5/mapbox.places/1213yuer.json?access_token=pk.eyJ1Ijoic3RlZXZlbmphcmFtaWxsbyIsImEiOiJja3U4dzd2Z2swMTBuMnJwMmhlcHR0a3lzIn0.3XKi23wPRz_OwXCwE3enJw&languaje=es&limit=1"

request({url: urlGC, json: true}, (error, response) => {
    if(error){
        console.log(error)
    }else if(response.body.mensaje){
        console.log("Error on body"+ response.body.error)
    }else{
        const features = response.body.features
        if(features.length === 0){
            console.log("Place not found")
        }else{
            console.log("Lat: " + features[0].center[1] + ", Long: " + features[0].center[0])
        }
    }
})