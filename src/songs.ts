import { readJsonFromFile, writeJsonToFile } from './fileRead'

const songsLocation = '../data/songs.json'

export interface song {
    band: string;
    album: string;
    song: string;
    rating?: number
}

export function readSongs(): song[] {
    let songs: song[] = readJsonFromFile(songsLocation);
    return songs
}

export function addSong(song: song) {
    let songs: song[] = readJsonFromFile(songsLocation)
    songs.push(song);
    writeJsonToFile(songs, songsLocation)
}