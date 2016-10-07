"use strict";
const songs_1 = require('./songs');
function songs(req, res) {
    let songs = songs_1.readSongs();
    let ratings = songs.map(song => song.rating * 5);
    let bands = songs.map(song => song.band);
    res.json(bands);
}
exports.songs = songs;
function postSong(req, res) {
    let newSong = {
        album: req.body.album,
        band: req.body.band,
        song: req.body.song
    };
    songs_1.addSong(newSong);
}
exports.postSong = postSong;
//# sourceMappingURL=songController.js.map