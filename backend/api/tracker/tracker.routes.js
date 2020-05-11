const express = require('express');
const router = express.Router();

module.exports = router;

const { getAllCountries } = require('./tracker.controller');

router.get('/', getAllCountries);
