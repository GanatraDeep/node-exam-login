const router = require('express').Router();
const authMiddleware = require('../middleware/auth.middleware');

router.get('/dashboard', authMiddleware('user'), async (req, res) => {
    return res.render('user/dashboard', {user: req.session});    
})

module.exports = router