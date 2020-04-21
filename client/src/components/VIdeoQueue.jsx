import React from "react";

const VideoQueue = ({videos}) => {
  if(videos){
    return (<div>videoqueue</div>
      // <VideoList/>
      // <AddVideoForm/>
    )
  }
  else {
    return (
      <h2>Add some Videos</h2>
    )
  }
}

export default VideoQueue;