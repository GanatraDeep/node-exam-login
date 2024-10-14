const auth = (role) => {
    return async (req, res, next) => {
        if(req.session.role && req.session.role == role)
        {
            next();
        }
        else
        {
            return res.render('error', {code: 403, message: "Unauthorised"})
        }
    }
}

module.exports = auth;