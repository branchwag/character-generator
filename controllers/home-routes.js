const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

// Prevent non logged in users from viewing the homepage
router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['username', 'ASC']], //consider where to place 'order'
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      users,
      // Pass the logged in flag to the template
      logged_in: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/homepage', (req, res) => {
  // if (!req.session.loggedIn) {
  //   res.redirect('/login');
  //   return;
  // }

  res.render('homepage', {
    loggedIn: req.session.loggedIn,
    username: req.session.user,
  });
});

router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.loggedIn) {
    res.redirect('/homepage');
    return;
  }

  res.render('login');
});

router.get('/char-form', (req, res) => {
  res.render('partials/char-form', {
    loggedIn: req.session.loggedIn,
  });
});

module.exports = router;
