const router = require('express').Router();
const { User } = require('../../models');

// CREATE new user
// POST api/users
router.post('/', async (req, res) => {
  try {
    // const dbUserData = await User.create({
    //   username: req.body.username,
    //   email: req.body.email,
    //   password: req.body.password,
    // });

    // req.session.save(() => {
    //   req.session.loggedIn = true;

    //   res.status(200).json(dbUserData);
    // });
    const userData = await User.create(req.body);
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.user = userData;
      req.session.loggedIn = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login
// POST /api/users/login
router.post('/login', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }
    console.log(dbUserData);
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user = dbUserData;
      res
        .status(200)
        .json({ user: dbUserData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
// POST /api/users/logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
