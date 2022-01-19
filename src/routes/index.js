const router = require('express').Router();

router.use('/api', require('./api'));

router.get('/', async (req, res) => {
    res.render('Home');
});

module.exports = router;
