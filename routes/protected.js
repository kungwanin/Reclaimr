const express = require('express');
const authenticate = require('../middlewares/authenticate');
const router = express.Router();

router.get('/profile', authenticate, (req, res) => {
  res.json({
    message: 'This is a protected route',
    user: req.user
  });
});

module.exports = router;
