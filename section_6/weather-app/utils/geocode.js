const request = require("postman-request")

const geocode = (address, callback) => {
    const urlGC = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1Ijoic3RlZXZlbmphcmFtaWxsbyIsImEiOiJja3U4dzd2Z2swMTBuMnJwMmhlcHR0a3lzIn0.3XKi23wPRz_OwXCwE3enJw&languaje=es&limit=1"

    request({url: urlGC, json: true}, (error, response) => {
        if(error){
            callback(error, undefined)
        }else if(response.body.mensaje){
            callback("Error on body"+ response.body.error, undefined)
        }else{
            const features = response.body.features
            if(!features){
                callback("Place not found", undefined)
            }else{
                callback(undefined, {
                    latitude: features[0].center[1], 
                    longitude: features[0].center[0],
                    location: features[0].place_name
                })
            }
        }
    })
}

module.exports = geocode