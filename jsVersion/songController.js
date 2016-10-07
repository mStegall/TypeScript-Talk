const songsM = require('./songs');

module.exports = {
    songs,
    postSong
}

function songs(req, res) {
    let songs = songsM.readSongs();
    let ratings = songs.map(song => song.rating * 5);
    let bands = songs.map(song => song.band);
    res.json(bands);
}

function postSong(req, res) {
    let newSong = {
        album: req.body.album,
        band: req.body.band,
        song: req.body.song
    };
    songsM.addSong(newSong);
}
