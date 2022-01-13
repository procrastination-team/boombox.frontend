import { getRootStore } from "../hooks/useRootStore"

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