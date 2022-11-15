import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  const showVideo = videos.map((video) => {
    return <VideoItem video={video} />;
  });
  return <div className="ui relaxed divided list">{showVideo}</div>;
};

export default VideoList;
