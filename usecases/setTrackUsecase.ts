import { getRootStore } from "../hooks/useRootStore"
import { CurrentTrack } from "../store/models";

export const setTrackUsecase = (track: CurrentTrack) => {
  const store = getRootStore();

  store.setCurrentTrack(track);
}