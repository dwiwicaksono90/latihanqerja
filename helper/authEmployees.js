function isLogin(req,res,next){
    if(req.session.user === undefined){
        res.redirect('/employers')
    }
    else{
        next()
    }
}

module.exports = isLogin;