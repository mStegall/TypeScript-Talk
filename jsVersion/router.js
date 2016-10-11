const express = require('express');
const songController = require('./songController');

var router = express.Router();

router.get('/songs', songController.songs);
router.post('/songs', songController.postSong);

module.exports = router