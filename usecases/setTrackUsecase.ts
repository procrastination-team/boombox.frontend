import { getRootStore } from "../hooks/useRootStore"
import { MusicService, MusicServiceUnion, Track } from "./searchTrackUsecase";

export const setTrackUsecase = (track: Track<MusicServiceUnion>) => {
  const store = getRootStore();

  store.setCurrentTrack(track);
}