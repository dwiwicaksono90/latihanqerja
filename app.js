const express = require('express')
const app = express()
const routerEmployees = require('./routes/routeEmployees')
const routerEmployers = require('./routes/routeEmployers')
var session = require('express-session')

app.use(session({
    secret: 'keyboard cat',
    resave: false,
  }))

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.listen(3000, () => {
console.log('latQerja on port 3000');
})

app.get('/', function(req, res) {
    res.render('index')
})
app.use('/employers', routerEmployers)
app.use('/employees', routerEmployees)