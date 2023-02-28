export function formatDuration(seconds: number, ms = false) {
  if (seconds < 0) seconds = -seconds;
  const time = {
    day: Math.floor((seconds * 1000) / 86400000),
    hour: Math.floor((seconds * 1000) / 3600000) % 24,
    minute: Math.floor((seconds * 1000) / 60000) % 60,
    second: Math.floor((seconds * 1000) / 1000) % 60,
    millisecond: ms ? Math.floor(seconds * 1000) % 1000 : 0,
  };

  return Object.entries(time)
    .filter(([key, val]) => {
      return val > 0 || ["minute", "second"].includes(key);
    })
    .map(([key, val]) => (val < 10 ? `0${val}` : `${val}`))
    .join(":");
}
