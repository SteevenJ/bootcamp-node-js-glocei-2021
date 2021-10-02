const path = require('path')
const express = require('express')

const app = express()
const publicDirectory = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates')

app.set('view engine', 'hbs')
app.set('views', viewsPath)

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

app.listen(3000, () => {
    console.log('Server running');
})