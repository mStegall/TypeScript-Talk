"use strict";
const songs_1 = require('./songs');
exports.songs = function (req, res) {
    let songs = songs_1.readSongs();
    let ratings = songs.map(song => song.rating * 5);
    let bands = songs.map(song => song.band);
    res.json(bands);
};
exports.postSong = function (req, res) {
    let newSong = {
        album: req.body.album,
        band: req.body.band,
        song: req.body.song
    };
    songs_1.addSong(newSong);
    res.json(newSong);
};
//# sourceMappingURL=songController.js.map