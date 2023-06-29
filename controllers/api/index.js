const router = require('express').Router();

const userRoutes = require('./user-routes');
const chatgptRoutes = require('./chatgpt-routes');

router.use('/users', userRoutes);
router.use('/chatgpt', chatgptRoutes);

module.exports = router;
