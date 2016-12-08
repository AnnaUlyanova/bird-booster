var path = require('path')
var express = require('express')
var hbs = require('express-handlebars')
var bodyParser = require('body-parser')
var routes = require('./routes')

var server = express()

module.exports = server

// Middleware
server.engine('hbs', hbs({
  defaultLayout: 'main.hbs',
  extname: 'hbs'
}))
server.set('view engine', 'hbs')
//server.set('views', path.join(__dirname, 'views'))

server.use(express.static('public'))
server.use(bodyParser.urlencoded({ extended: true }))

// Routes
server.get('/', routes.getHome)
// server.get('/bird/:name', routes.getBirdByName)
