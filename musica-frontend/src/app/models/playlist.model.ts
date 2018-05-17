import { Usuario } from './usuario.model';
import { Musica } from './musica.model';

export class Playlist {
    public id: String;
    public playlistMusicas: Musica[];
    public usuario: Usuario;
}
