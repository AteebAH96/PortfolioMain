export function isTikTokUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" &&
      (url.hostname === "tiktok.com" || url.hostname.endsWith(".tiktok.com"));
  } catch {
    return false;
  }
}

export function getVideoEmbedUrl(value) {
  if (!isTikTokUrl(value)) return value;
  const path = new URL(value).pathname;
  const id = path.match(/\/(?:video|player\/v1)\/(\d+)(?:\/|$)/)?.[1];
  return id ? `https://www.tiktok.com/player/v1/${id}` : "";
}
