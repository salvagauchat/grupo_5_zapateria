function redirecion (req, res, next) {
    if(req.session.userLogged) {
        
        let id = req.session.userLogged.id - 1;
        return res.redirect('/perfil/' + id);
}
next()
}

module.exports = redirecion;