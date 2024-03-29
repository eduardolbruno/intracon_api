const express = require ('express')
const app = express()
const morgan = require('morgan')

// settings
app.set('port', 3000)
app.set ('json spaces', 2)

// middleware
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// routes
app.use('/api/phones', require('./routes/phones.js'))

// server start
app.listen(app.get('port'), () => {
    console.log('server on port '+app.get('port'))
})