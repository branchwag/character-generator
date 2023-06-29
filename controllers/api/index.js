const router = require('express').Router();

const userRoutes = require('./user-routes');
const chatgptRoutes = require('./chatgpt-routes');
const classRoutes = require('./class-routes');

router.use('/users', userRoutes);
router.use('/chatgpt', chatgptRoutes);
router.use('/classes', classRoutes);

module.exports = router;
