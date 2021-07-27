import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

const App = () => {

  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('buildings');

  useEffect (() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  //anytime we complete our search and get a new
  // list of videos were going to select the very first video in the list







  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
              onVideoSelect={setSelectedVideo}
              videos={videos}
             />
            </div>
          </div>
        </div>
    </div>
  );
};


export default App;
