const express = require('express');
const router = express.Router();
const { createDataEntry, getAllDataEntries } = require('../controller/getControoller');

// Route to create a new data entry
router.post('/', createDataEntry);

// Route to get all data entries
router.get('/', getAllDataEntries);

module.exports = router;
