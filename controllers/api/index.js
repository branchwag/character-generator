const router = require('express').Router();

const userRoutes = require('./user-routes');
const chatgptRoutes = require('./chatgpt-routes');
const classRoutes = require('./class-routes');
const raceRoutes = require('./race-routes');

router.use('/users', userRoutes);
router.use('/chatgpt', chatgptRoutes);
router.use('/classes', classRoutes);
router.use('/races', raceRoutes)

module.exports = router;
