console.log("Hello from JS static file");

fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) => {
        console.log(data);
    })
})


fetch('http://api.weatherstack.com/current?access_key=45eccb002580883052488f7a4a063ed3&query=Boston').then((response) => {
    response.json().then(({success = true, error = undefined, request = {}, location= {}, current = {} } = {}) => {
        if(!success && error){
            console.log(error.info)
        }else{
            if(current.length == 0){
                console.log("Coordinates not found")
            }else{
                console.log(current.weather_descriptions[0] + " .It is currently " + current.temperature + 'º out. There is a ' + current.precip + '% chance of rain')
            }
        }
    })
})

fetch('http://localhost:3000/weather?address=!').then((response) => {
    response.json().then(({error = undefined, location = undefined, forecast = undefined } = {}) => {
        if(error){
            console.log(error)
        }else{
            console.log(location)
            console.log(forecast)
        }
    })
})
