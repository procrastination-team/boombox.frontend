import { getRootStore } from "../hooks/useRootStore"
import { CurrentTrack } from "../store";
import { MusicService, MusicServiceUnion, Track } from "./searchTrackUsecase";

export const setCurrentTrackPositionUsecase = (position: number) => {
  const store = getRootStore();

  if (!store.currentTrack) {
    return;
  }

  store.setCurrentTrack({
    ...store.currentTrack,
    position,
  });
}