const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const publicDirectory = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)


app.use(express.static(publicDirectory))

app.get('/', (req, res) => {
    res.render('index', {
        title: 'My index',
        name: 'Steeven Jaramillo'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'My help',
        name: 'Steeven Jaramillo'
    })
})

app.get('/help/*', (req, res) => {
    res.send('Help article')
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'My about',
        name: 'Steeven Jaramillo'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'Medellin'
    })
})

app.get('*', (req, res) => {
    res.render('error', {
        title: 'Error 404',
        name: 'Steeven Jaramillo'
    })
})

app.listen(3000, () => {
    console.log('Server running');
})