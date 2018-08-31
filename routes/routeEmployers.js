const router = require('express').Router()
const ControllerEmployers = require('../controllers/controllerEmployers')
const isLogin = require('../helper/authEmployers');

router.get('/', function(req, res) {
    res.render('loginEmployers');
})

router.post('/', function(req, res) {
    ControllerEmployers.login(req, res);
})

router.get('/logout', function(req, res) {
    ControllerEmployers.logout(req, res);
})

router.get('/register', function(req, res) {
    res.render('registerEmployers')
})

router.post('/register', function(req, res) {
    ControllerEmployers.register(req, res)
})

router.get('/home', isLogin, function(req, res) {
    ControllerEmployers.home(req, res)
})

router.get('/addJob', isLogin, function(req, res) {
    res.render('employersAddJob')
})

router.post('/addJob', isLogin, function(req, res) {
    ControllerEmployers.addJob(req, res)
})

router.get('/deleteJob/:id', isLogin, function(req, res) {
    ControllerEmployers.deleteJob(req, res)
})

router.get('/editJob/:id', isLogin, function(req, res) {
    ControllerEmployers.editJob(req, res)
})

router.post('/editJob/:id', isLogin, function(req, res) {
    ControllerEmployers.editJobPost(req, res)
})

module.exports = router