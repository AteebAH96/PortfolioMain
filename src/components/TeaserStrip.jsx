import { FaClapperboard } from "react-icons/fa6";
import { FiCode } from "react-icons/fi";
import { projects } from "../data/data";
import VideoThumbnail from "./VideoThumbnail";

const teaserItems = [
  ...projects.web.slice(0, 2).map((item) => ({ ...item, mode: "developer", tag: "Dev" })),
  ...projects.video.slice(0, 2).map((item) => ({ ...item, mode: "editor", tag: "Edit" })),
];

export default function TeaserStrip({ onSelect }) {
  return (
    <section className="teaser-strip" aria-labelledby="teaser-title">
      <div className="teaser-container">
        <h2 id="teaser-title">Best of both worlds</h2>
        <div className="teaser-grid">
          {teaserItems.map((item, index) => (
            <button
              type="button"
              className="teaser-card"
              key={`${item.mode}-${item.id}`}
              onClick={() => onSelect(item.mode, item.id)}
              aria-label={`View ${item.title} in ${item.mode === "developer" ? "Developer" : "Editor"} mode`}
            >
              <span className={`teaser-thumb teaser-thumb-${item.mode}`}>
                {item.mode === "editor" ? (
                  <VideoThumbnail video={item}>
                    <FaClapperboard aria-hidden="true" />
                  </VideoThumbnail>
                ) : item.image ? (
                  <img src={item.image} alt="" loading="lazy" />
                ) : (
                  <FiCode aria-hidden="true" />
                )}
              </span>
              <span className="teaser-card-body">
                <span className={`teaser-tag teaser-tag-${item.mode}`}>{item.tag}</span>
                <span className="teaser-title">{item.title}</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
