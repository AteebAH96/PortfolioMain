import { useEffect, useState } from "react";
import { isTikTokUrl } from "../utils/video";

export default function VideoThumbnail({ video, children }) {
  const [resolved, setResolved] = useState(null);
  const [failedImage, setFailedImage] = useState("");

  useEffect(() => {
    if (video.thumbnail || !isTikTokUrl(video.videoUrl)) return;
    const controller = new AbortController();
    fetch(`https://www.tiktok.com/oembed?url=${encodeURIComponent(video.videoUrl)}`, {
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) throw new Error("Thumbnail unavailable");
        return response.json();
      })
      .then((data) => setResolved({ url: video.videoUrl, thumbnail: data.thumbnail_url }))
      .catch(() => {}); // Keep the card artwork if TikTok is unavailable.
    return () => controller.abort();
  }, [video.videoUrl, video.thumbnail]);

  const thumbnail = video.thumbnail ||
    (resolved?.url === video.videoUrl ? resolved.thumbnail : "");
  return thumbnail && failedImage !== thumbnail ? (
    <img src={thumbnail} alt={video.title} loading="lazy"
      onError={() => setFailedImage(thumbnail)} />
  ) : children;
}
