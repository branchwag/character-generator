const router = require('express').Router();
const { Character, Class, Race } = require('../../models');

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
  const charData = await Character.findAll({
    include: [{ model: Class }, { model: Race }],
  });
  const characters = charData.map((Character) =>
    Character.get({ plain: true }),
  );
  res.send(characters);
});

router.get('/:id', async (req, res) => {
  try {
    const charData = await Character.findByPk(req.params.id, {
      include: [{ model: Class }, { model: Race }],
    });
    if (!charData) {
      res.status(404).json({ message: 'No character found with this id' });
      return;
    }
    res.status(200).json(charData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//PUT to update character by ID with AI output
router.put('/:id', async (req, res) => {
  try {
    const charData = await Character.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!charData) {
      res.status(404).json({ message: 'No character found with this id' });
      return;
    }
    res.status(200).json(charData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
