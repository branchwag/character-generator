const router = require('express').Router();
const { Race } = require('../../models');

router.get('/', async (req, res) => {
  const raceAll = await Race.findAll();
  const classes = raceAll.map((Race) => Race.get({ plain: true }));
  res.send(classes);
});

router.get('/:id', async (req, res) => {
  try {
    const raceData = await Race.findByPk(req.params.id);
    if (!raceData) {
      res.status(404).json({ message: 'No race found with that id' });
      return;
    }
    res.status(200).json(raceData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
