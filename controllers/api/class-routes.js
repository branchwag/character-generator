const router = require('express').Router();
const { Class } = require('../../models');

router.get('/', async (req, res) => {
    // try {
    const classAll = await Class.findAll();
    const classes = classAll.map(Class => Class.get({ plain: true }))
    // const classes = classAll.map(class => class.get({ plain: true }));
    //     console.log(classes)
    // } catch (err) {
    //     res.status(500).json(err);
    // }

    // console.log(classes)
    res.send(classes)

});

module.exports = router;