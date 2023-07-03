const router = require('express').Router();
const { Character } = require('../../models');

// POST /api/characters
router.post('/', async (req, res) => {
  try {
    const charData = await Character.create(req.body);
    res.status(200).json(charData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/', async (req, res) => {
  const charData = await Character.findAll();
  const characters = charData.map((Character) =>
    Character.get({ plain: true }),
  );
  res.send(characters);
});

module.exports = router;
