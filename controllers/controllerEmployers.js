const Employer = require('../models').Employer
const Job = require('../models').Job

class ControllerEmployers {
    static login(req, res){
        let email = req.body.email;
        let pass = req.body.password;
        Employer.findOne({
            where :{
                email : email,
                password : pass
            }
        })
        .then(data=>{
            // res.send(data)
            req.session.role = {
                id: data.id,
                name : data.name,
                email : data.email
            }
            // console.log(data);
            // console.log(req.session.user)            
            res.redirect('/employers/home')
        })
        .catch(err => {
            res.send(err)
        })
    }

    static logout(req, res){
        req.session.destroy()
        res.redirect('/')
    }
    static register(req, res){        
        Employer.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        .then(employer => {
            res.redirect('/employers')
        })
        .catch(err => {
            res.send(err)
        })
    }

    static addJob(req, res){
        Job.create({
            name: req.body.name,
            type: req.body.type
        })
        .then(employer => {
            res.redirect('/employers/home')
        })
        .catch(err => {
            res.send(err)
        })
    }

    static home(req, res){        
        Job.findAll({
            attributes: [
                'id',
                'name',
                'type',
                'employeId',
                'employerId',
                'createdAt',
                'updatedAt'
            ]
        })
        .then(datas => {  
            res.render('employerHome', {jobs: datas})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static deleteJob(req, res){
        Job.destroy({where: {
            id: req.params.id
        }})
        .then(job => {
            res.redirect('/employers/home')
        })
        .catch(err => {
            res.send(err)
        })
    }

    static editJob(req, res){
        Job.findAll({attributes: [
            'id',
            'name',
            'type',
            'employeId',
            'employerId'
        ], where: {id: req.params.id}})
        .then(job => {      
            // res.send(job)      
            res.render('employersEditJob', {data: job})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static editJobPost(req, res){
       Job.update({
           name: req.body.name,
           type: req.body.type
       }, {where: {id: req.params.id}}) 
        .then(job => {
            res.redirect('/employers/home')
        })
    }
    
}

module.exports = ControllerEmployers