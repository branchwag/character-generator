const router = require('express').Router();
const { Character } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const charData = await Character.create(req.body)
        res.status(200).json(charData);
    } catch (err) {
        res.status(400).json(err)
    }
});

module.exports = router;