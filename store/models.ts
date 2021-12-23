export enum MusicService {
  Spotify = 'spotify',
  YandexMusic = 'yandex-music',
}

export type MusicServiceUnion = `${MusicService}`;

interface Artist {
  name: string;
}

export interface Track<Service> {
  id: string;
  service: Service;
  name: string;
  artists: Artist[];
  imageUrl: string;

  /**
   * Duration in milliseconds
   */
  duration: number;
}

export interface CurrentTrack extends Track<MusicServiceUnion> {
  position: number;
}
