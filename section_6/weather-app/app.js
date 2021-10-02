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
        geocode(argv.location, (error, data) => {
            if(error){
                return console.log(error)
            }
            forecast(data.latitude, data.longitude, (error, dataF) => {
                if(error){
                    return console.log(error)
                }
                return console.log(data.location + "\n" + dataF)
            })
        })
    }
})

yargs.parse()