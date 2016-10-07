"use strict";
const express = require('express');
const songController_1 = require('./songController');
exports.router = express.Router();
exports.router.get('/songs', songController_1.songs);
exports.router.post('/songs', songController_1.postSong);
//# sourceMappingURL=router.js.map