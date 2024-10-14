const router = require('express').Router();
const {login, register, getRoles} = require('../services/auth.service');

router.get('/', async (req, res) => {
    return res.render('login');
})
router.post('/', async (req, res)=>{
    try {
        const {email, password} = req.body;
        const u = await login(email, password);

        if(!u.success)
            return res.render('login', {error: u.message});

        req.session.id = u.user._id
        req.session.role = u.user.role.role
        req.session.name = u.user.name

        if(u.user.role.role == "admin")
            return res.redirect('/admin/dashboard')
        else
            return res.redirect('/user/dashboard');
    } catch (error) {
        return res.render('login', {error: error});
    }
})

router.get('/register', async (req, res) => {
    return res.render('register');
})
router.post('/register', async (req, res) => {
    try {
        const {name, email, password, role} = req.body;
        await register(name, email, password, role);
        return res.redirect('/');
    } catch (error) {
        return res.render('register', {error: error});
    }
})

router.get('/roles', async (req, res) => {
    try {
        const r = await getRoles();
        return res.status(200).json({success: true, message: "Roles fetched successfully", roles: r});
    } catch (error) {
        return res.status(500).json({success: false, message: error})
    }
})

router.get('/logout', async (req, res) => {
    req.session.destroy();
    res.clearCookie('connect.sid')
    res.redirect('/');
})

module.exports = router;