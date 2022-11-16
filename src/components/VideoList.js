import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const showVideo = videos.map((video) => {
    return (
      <VideoItem
        video={video}
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
      />
    );
  });
  return <div className="ui relaxed divided list">{showVideo}</div>;
};

export default VideoList;
