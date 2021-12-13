const MS_IN_SECOND = 1000;
const SECOND_IN_MINUTE = 60;

/**
 * Convert milliseconds to track duration format
 * 
 * @param ms - track duration in milliseconds
 * @example 516893 -> 8:36
 */
export const formatDuration = (ms: number): string => {
  const numberInSeconds = 2;
  const minutes = Math.floor(ms / MS_IN_SECOND / SECOND_IN_MINUTE);
  const seconds = String(Math.floor(ms / MS_IN_SECOND % SECOND_IN_MINUTE)).padStart(numberInSeconds, '0');

  return `${minutes}:${seconds}`;
};
