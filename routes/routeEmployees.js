const router = require ('express').Router()
const ControllerEmployees = require('../controllers/controllerEmployees')

router.get('/', function(req, res) {
    res.render('employeesLogin')
})

router.get('/register', function(req, res) {
    res.render('employeesRegister')
})

router.post('/register', function(req, res) {
    ControllerEmployees.register(req, res)
})

router.get('/home', function(req, res) {
    ControllerEmployees.home(req, res)
})



module.exports = router