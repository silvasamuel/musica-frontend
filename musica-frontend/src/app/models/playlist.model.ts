import { Usuario } from './usuario.model';
import { Musica } from './musica.model';
import { PlaylistMusicas } from './playlistMusicas.model';

export class Playlist {
    public id: String;
    public playlistMusicas: PlaylistMusicas[];
    public usuario: Usuario;
}
