"use strict";
var express = require('express');
var songs_1 = require('./songs');
exports.router = express.Router();
exports.router.get('/', function (req, res) {
    var songs = songs_1.readSongs();
    var bands = songs.map(function (song) { return song.band; });
    res.json(bands);
});
exports.router.get('/addSong', function (req, res) {
    var newSong = {
        album: 'test',
        band: 'hello',
        song: 'Terrible'
    };
    songs_1.addSong(newSong);
});
//# sourceMappingURL=router.js.map