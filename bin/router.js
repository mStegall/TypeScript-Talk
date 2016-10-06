"use strict";
const express = require('express');
const songs_1 = require('./songs');
exports.router = express.Router();
exports.router.get('/', function (req, res) {
    let songs = songs_1.readSongs();
    let bands = songs.map(song => song.band);
    res.json(bands);
});
exports.router.get('/addSong', function (req, res) {
    let newSong = {
        album: 'test',
        band: 'hello',
        song: 'Terrible'
    };
    songs_1.addSong(newSong);
});
//# sourceMappingURL=router.js.map