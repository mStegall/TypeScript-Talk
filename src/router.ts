import * as express from 'express';

import {addSong, readSongs, song} from './songs';

export var router = express.Router();

router.get('/', function (req, res) {
    let songs = readSongs()

    let ratings = songs.map(song => song.rating * 5)
    let bands = songs.map(song => song.band)
    res.json(bands);
})

router.get('/addSong', function (req, res) {
    let newSong: song = {
        album: 'test',
        band: 'hello',
        song: 'Terrible'
    }

    addSong(newSong);
})

