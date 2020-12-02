const express = require('express');
const passport = require('passport');

const User = require('../models/User');
const router = express.Router();

router.post('/register', async (req, res, next) => {
    User.register(new User({ 
        username: req.body.username,
        }), req.body.password, function(err) {

        if (err) {
            return next(err);
        }   

        res.sendStatus(200);
    });
});

router.post('/login', async (req, res, next) => {
    passport.authenticate('local', {session: true })(req, res, function() {
        res.sendStatus(200);
    });
});


router.post('/logout', async (req, res, next) => {
    req.logout();
    req.session.destroy();
    res.sendStatus(200);
});


router.get('/checkauth', async (req, res, next) => {
    if (req.isAuthenticated()) {
        res.sendStatus(200);
    } else {
        req.sendStatus(401);
    }
});

module.exports = router;
