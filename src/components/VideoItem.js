import "./VideoItem.css";
const VideoItem = ({ video: { snippet, id } }) => {
  return (
    <div className="video-item item">
      <img
        src={snippet.thumbnails.medium.url}
        alt={snippet.title}
        key={id.videoId}
        className="ui image"
      />
      <div className="content">
        <div className="header">{snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
