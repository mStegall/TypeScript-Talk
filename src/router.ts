import * as express from 'express';

import {addSong, readSongs, song} from './songs';
import {postSong, songs} from './songController';


export var router = express.Router();

router.get('/songs', songs)

router.post('/songs', postSong)

