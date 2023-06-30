const router = require('express').Router();
const { Race } = require('../../models');

router.get('/', async (req, res) => {
    const raceAll = await Race.findAll();
    const classes = raceAll.map(Race => Race.get({ plain: true }))
    res.send(classes)
})

module.exports = router;