import * as express from 'express';
import { addSong, readSongs, song } from './songs';

export let songs: express.RequestHandler = function (req, res) {
    let songs = readSongs()

    let ratings = songs.map(song => song.rating * 5)
    let bands = songs.map(song => song.band)
    res.json(bands);
}

export let postSong: express.RequestHandler = function (req, res) {
    let newSong: song = {
        album: req.body.album,
        band: req.body.band,
        song: req.body.song
    }

    addSong(newSong);

    res.json(newSong);
}

