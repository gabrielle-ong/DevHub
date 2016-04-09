const express = require('express')
const app = express()
const path = require('path')
const logger = require('morgan')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/devhub')

app.use(logger('dev'))

app.set('views', path.join(__dirname, 'views'))
app.engine('ejs', require('ejs').renderFile)
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))

app.listen(3000)
