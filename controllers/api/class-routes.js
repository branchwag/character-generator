const router = require('express').Router();
const { Class } = require('../../models');

router.get('/', async (req, res) => {
    // try {
    const classAll = await Class.findAll();
    const classes = classAll.map(Class => Class.get({ plain: true }))
    res.send(classes)

});

router.get('/:id', async (req, res) => {
    try {
        const classData = await Class.findByPk(req.params.id)
        if (!classData) {
            res.status(404).json({ message: 'No class found with that id'});
            return;
        }
        res.status(200).json(classData);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;