function redirecion (req, res, next) {
    if(req.session.userLogged) {
        return res.redirect('/perfil/4')
}
next()
}

module.exports = redirecion;