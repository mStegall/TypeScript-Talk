"use strict";
const fileRead_1 = require('./fileRead');
const songsLocation = '../data/songs.json';
function readSongs() {
    let songs = fileRead_1.readJsonFromFile(songsLocation);
    return songs;
}
exports.readSongs = readSongs;
function addSong(song) {
    let songs = fileRead_1.readJsonFromFile(songsLocation);
    songs.push(song);
    fileRead_1.writeJsonToFile(songs, songsLocation);
}
exports.addSong = addSong;
//# sourceMappingURL=songs.js.map