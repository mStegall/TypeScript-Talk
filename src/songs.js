"use strict";
var fileRead_1 = require('./fileRead');
var songsLocation = '../data/songs.json';
function readSongs() {
    var songs = fileRead_1.readJsonFromFile(songsLocation);
    return songs;
}
exports.readSongs = readSongs;
function addSong(song) {
    var songs = fileRead_1.readJsonFromFile(songsLocation);
    songs.push(song);
    fileRead_1.writeJsonToFile(songs, songsLocation);
}
exports.addSong = addSong;
//# sourceMappingURL=songs.js.map