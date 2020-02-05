const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');

// @route   POST api/users
// @desc    Register a user
// @access  Public
router.post(
  '/',
  [
    check('name', 'Please add name')
      .not()
      .isEmpty(),
    check('email', 'Please includ a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({
      min: 6
    })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(404).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      // try to find user in the DB
      let user = await User.findOne({ email });

      // if user is true, it's mean user already exist, he can't register again
      if (user) {
        return res.status(400).json({ msg: 'User already exists' });
      }

      // if doesn't exist create a new User
      user = new User({
        name,
        email,
        password
      });

      // need to crypt the password before add the user in DB using bcryptjs
      const salt = await bcrypt.genSalt(10);

      // update the value of password
      user.password = await bcrypt.hash(password, salt);

      // saved user in db
      await user.save();

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: 360000
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(404).send('Server Error');
    }
  }
);

module.exports = router;
