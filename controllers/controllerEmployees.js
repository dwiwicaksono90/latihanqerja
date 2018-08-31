const Employee = require('../models').Employee
const Job = require('../models').Job

class ControllerEmployees {
    static register(req, res){
        Employee.create({
            name: req.body.name,
            email: req.body.email,
            type: req.body.profesion,
            password: req.body.password
        })
        .then(employee => {
            res.redirect('/employees')
        })
        .catch(err => {
            res.send(err)
        })
    }
    static home(req, res){
        Job.findAll({attributes: [
            'id',
            'name',
            'type'
        ]})
        .then(datas => {
            res.render('EmployeesHome', {jobs: datas})
        })
        .catch(err => {
            res.send(err)
        })
    }



}

module.exports = ControllerEmployees