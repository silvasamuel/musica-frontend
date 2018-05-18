import { Musica } from './musica.model';

export class PlaylistMusicas {
    musica: Musica;
    musicaId: string;
    playlistId: string;

    constructor(musica: Musica, musicaId, playlistId: string) {
        this.musica = musica;
        this.musicaId = musicaId;
        this.playlistId = playlistId;
    }
}
