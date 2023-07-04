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
      loggedIn: req.session.loggedIn,
      username: req.session.user,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/homepage', (req, res) => {
  if (req.session.loggedIn) {
    res.render('homepage', {
      loggedIn: req.session.loggedIn,
      username: req.session.user,
    });
  } else {
    res.render('homepage', {
      loggedIn: req.session.loggedIn,
      username: null,
    });
  }
});

router.get('/profile', (req, res) => {
  res.render('profile', {
    loggedIn: req.session.loggedIn,
    name: req.session.user,
  });
});

router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.loggedIn) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

router.get('/logout', (req, res) => {
  // Destroy the session to log the user out
  req.session.destroy((err) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.redirect('/login');
    }
  });
});

router.get('/char-form', (req, res) => {
  res.render('partials/char-form', {
    loggedIn: req.session.loggedIn,
  });
});

router.get('/output', (req, res) => {
  res.render('partials/output', {
    loggedIn: req.session.loggedIn,
  });
});
module.exports = router;
