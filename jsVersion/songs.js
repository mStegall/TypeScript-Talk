const fileRead = require('./fileRead');
const songsLocation = '../data/songs.json';

module.exports = {
    readSongs,
    addSong
}

function readSongs() {
    let songs = fileRead.readJsonFromFile(songsLocation);
    return songs;
}

function addSong(song) {
    let songs = fileRead.readJsonFromFile(songsLocation);
    songs.push(song);
    fileRead.writeJsonToFile(songs, songsLocation);
}
