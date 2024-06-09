const express = require('express');
const router = express.Router();
const ragController = require('../controllers/ragController');

const geminiController = require('../controllers/geminiController');


router.post('/context', ragController.getContextResponse);

router.post('/gemini', geminiController.getResponseChatGemini);


module.exports = router;
