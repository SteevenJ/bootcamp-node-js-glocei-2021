const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const yargs = require('yargs')


yargs.command({
    command: 'geocode',
    describe: 'Geocode',
    builder: {
        location: {
            describe: 'Location',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        geocode(argv.location, (error, {latitude, longitude, location} = {}) => {
            if(error){
                return console.log(error)
            }
            forecast(latitude, longitude, (error, dataF) => {
                if(error){
                    return console.log(error)
                }
                return console.log(location + "\n" + dataF)
            })
        })
    }
})

yargs.parse()