const express = require('express');
const router = express.Router();

const { Profile } = require('../models');

router.get("/", async (req, res) => {
    const response = await Profile.find({});
    res.json(
        [{
            name: "Brandon is a cat",
            school: "UIUC",
            year: "2020",
            age: "22",
            gender: "Male",
            major: "Cat Philosophy",
            phoneNumber: "123-456-7890",
            fbUsername: "BrandonWang",
            igUsername: "BMW",
            scUsername: "IAmABMW",
            email: "iamalsoacat@brandon.edu",
            housingType: "Apartment",
            numRoomates: "3",
            shortDesc: "cat cat cat cat cat",
            longDesc: "cat cat cat cat cat cat cat cat cat cat cat cat cat cat cat cat cat cat cat cat cat",
            quizAnswers: [1, 2, 3]
        }]
    );
  });