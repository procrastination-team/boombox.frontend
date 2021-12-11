import { getRootStore } from "../hooks/useRootStore";
import { backendSpotifyPlayTrack } from "./backend/spotifyPlayTrack";

/**
 * Play any spotify track by id
 * 
 * @param id - spotify track uri
 */
export const spotifyPlayTrackUsecase = async (id: string) => {
  const store = getRootStore();
  const { deviceId } = store.spotifyStore;
  
  if (!deviceId) {
    console.log('No device connected');

    return;
  }

  await backendSpotifyPlayTrack(id, deviceId);
}