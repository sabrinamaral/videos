import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";

class App extends React.Component {
  state = { videos: [] };

  onTermSubmit = async (term) => {
    const resp = await youtube.get("/search", {
      params: { q: term },
    });
    this.setState({ videos: resp.data.items });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar handleSubmit={this.onTermSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
