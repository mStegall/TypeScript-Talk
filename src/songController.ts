import * as express from 'express';
import { addSong, readSongs, song } from './songs';

export function songs(req: express.Request, res: express.Response) {
    let songs = readSongs()

    let ratings = songs.map(song => song.rating * 5)
    let bands = songs.map(song => song.band)
    res.json(bands);
}

export function postSong(req: express.Request, res: express.Response) {
    let newSong: song = {
        album: req.body.album,
        band: req.body.band,
        song: req.body.song
    }

    addSong(newSong);
}

