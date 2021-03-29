const express = require('express');
const router = express.Router();

const { collectLanguages, translate } = require('./app/controller/TranslaterController');

router.get('/collectLanguages', collectLanguages);
router.post('/translate', translate);

module.exports = router;