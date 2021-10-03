const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

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
    if(!req.query.address){
        return res.send({
            error: 'You must provide a address var'
        })
    }

    geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {
        if(error){
            return res.send({
                error
            })
        }
        forecast(latitude, longitude, (error, dataF) => {
            if(error){
                return res.send({error})
            }
            return res.send({
                location,
                forecast: dataF,
                address: req.query.address
            })
        })
    })
})

app.get('/products', (req, res) => {
    if(!req.query.search){
        return res.send({
            error: 'You must provide a search term'
        })
    }
    res.send({
        products: [req.query.search]
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