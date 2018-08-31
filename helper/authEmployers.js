function isLogin(req,res,next){
    if(req.session.role === undefined){        
        res.redirect('/employers')
    }
    else {
        next()
    }
}

module.exports = isLogin;