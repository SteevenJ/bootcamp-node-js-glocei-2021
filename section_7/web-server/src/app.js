const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('<h1>Index</h1>')
})

app.get('/help', (req, res) => {
    res.send('<h1>Help</h1>')
})

app.get('/about', (req, res) => {
    res.send('<h1>About</h1>')
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'Medellin'
    })
})

app.listen(3000, () => {
    console.log('Running');
})