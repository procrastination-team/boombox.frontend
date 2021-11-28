import React, { useEffect, useState } from 'react';
import Cookie from 'js-cookie';

interface SpotifyPlayerProps {

}

declare global {
  interface Window {
    onSpotifyWebPlaybackSDKReady: () => void;
    Spotify: any;
  }
}

interface WebPlaybackTrack {
  uri: string; // Spotify URI spotify:track:xxxx
  id: string | null;                // Spotify ID from URI (can be null)
  type: 'track' | 'episode' | 'ad';             // Content type: can be "track", "episode" or "ad"
  media_type: 'audio' | 'video';       // Type of file: can be "audio" or "video"
  name: string;         // Name of content. Song name
  is_playable: boolean;         // Flag indicating whether it can be played
  album: {
    uri: SVGStringList; // Spotify Album URI. spotify:album:xxxx
    name: string;
    images: [
      { url: string } // https://image/xxxx
    ]
  },
  artists: [
    {
      uri: string; // spotify:artist:xxxx
      name: string;
    }
  ]
}


interface WebPlaybackState {
  context: {
    uri: string; // The URI of the context (can be null). spotify:album:xxx
    metadata: {
      [key: string]: any;
    };             // Additional metadata for the context (can be null)
  },
  disallows: {                // A simplified set of restriction controls for
    pausing: boolean;           // The current track. By default, these fields
    peeking_next: boolean;      // will either be set to false or undefined, which
    peeking_prev: boolean;      // indicates that the particular operation is
    resuming: boolean;          // allowed. When the field is set to `true`, this
    seeking: boolean;           // means that the operation is not permitted. For
    skipping_next: boolean;     // example, `skipping_next`, `skipping_prev` and
    skipping_prev: boolean;      // `seeking` will be set to `true` when playing an
    // ad track.
  },
  paused: boolean;  // Whether the current track is paused.
  position: number;    // The position_ms of the current track.
  repeat_mode: number; // The repeat mode. No repeat mode is 0,
  // repeat context is 1 and repeat track is 2.
  shuffle: false; // True if shuffled, false otherwise.
  track_window: {
    current_track: WebPlaybackTrack;                            // The track currently on local playback
    previous_tracks: WebPlaybackTrack[]; // Previously played tracks. Number can vary.
    next_tracks: WebPlaybackTrack[];  // Tracks queued next. Number can vary.
  }
}

interface WebPlaybackError {
  message: string;
}


export const SpotifyPlayer: React.FC<SpotifyPlayerProps> = (props) => {
  const [player, setPlayer] = useState<any>(undefined);
  const [isPaused, setPaused] = useState(false);
  const [deviceId, setDeviceId] = useState('');
  const [isActive, setActive] = useState(false);
  const [currentTrack, setTrack] = useState({});

  const playTrack = (spotifyUri: string, device_id: string = deviceId) => {
    if (!device_id) {
      return;
    }

    fetch(`https://api.spotify.com/v1/me/player/play?device_id=${device_id}`, {
      method: 'PUT',
      body: JSON.stringify({ uris: [spotifyUri] }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Cookie.get('spotifyAccessToken')}`
      },
    });
  }


  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;

    document.body.appendChild(script);

    if (typeof window !== 'undefined') {
      window.onSpotifyWebPlaybackSDKReady = () => {
        const accessToken = Cookie.get('spotifyAccessToken');

        let player = new window.Spotify.Player({
          name: 'Web Playback SDK',
          getOAuthToken: (cb: any) => { cb(accessToken); },
          volume: 0.5
        });

        setPlayer(player);

        player.addListener('ready', ({ device_id }: { device_id: string }) => {
          console.log('Ready with Device ID', device_id);
          setDeviceId(device_id);
          playTrack('spotify:track:1Hy3CoHThqF0NBSmkmeR21', device_id);
        });

        player.addListener('not_ready', ({ device_id }: { device_id: string }) => {
          console.log('Device ID has gone offline', device_id);
        });

        player.addListener('player_state_changed', ((state: any) => {
          console.log('state', state);
          if (!state) {
            return;
          }

          setTrack(state.track_window.current_track);
          setPaused(state.paused);


          player.getCurrentState().then((state: any) => {
            (!state) ? setActive(false) : setActive(true)
          });
        }));


        player.connect();

      };
    }
  }, []);


  return (
    <div>
      <span>{ isActive ? '' : 'Loading...'}</span>
      <button onClick={() => { player.previousTrack() }}>prev</button>
      <button onClick={() => { player.togglePlay() }}>{isPaused ? 'Play' : 'Pause'}</button>
      <button onClick={() => { player.nextTrack() }}>next</button>
    </div>
  )
}