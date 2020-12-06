const express = require('express');
const router = express.Router();

const { Profile } = require('../models');

router.post('/register', async (req, res) => {
    console.log(req.body)
    const newProfile = new Profile(req.body);
    await newProfile.save()
    res.json(newProfile);
})

module.exports = router;