const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars').engine
const app = express()
const port = 3000

app.use(morgan('combined'))

// Use static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

// Template engine
app.engine('hbs', handlebars({
  extname: '.hbs'
}))
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'))

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/news', (req, res) => {
  res.render('news')
})

app.get('/search', (req, res) => {
  res.render('search')
})

app.post('/search', (req, res) => {
  res.send('')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})