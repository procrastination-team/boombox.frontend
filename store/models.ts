export enum MusicService {
  Spotify = 'Spotify',
  YandexMusic = 'YandexMusic',
}

interface Artist {
  name: string;
}

export interface Track<Service> {
  service: Service;
  name: string;
  artist: Artist;
  imageUrl: string;

  /**
   * Duration in milliseconds
   */
  duration: number;
}