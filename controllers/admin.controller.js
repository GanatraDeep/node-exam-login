const router = require('express').Router();
const authMiddleware = require('../middleware/auth.middleware');

router.get('/dashboard', authMiddleware('admin'), async (req, res) => {
    return res.render('admin/dashboard', {admin: req.session});    
})

module.exports = router