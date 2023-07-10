import React from 'react'
import SideBar from './SideBar'

function SideVideo({videos, onVideoSelect}) {
    const videoSide = videos.map(video => (
        <SideBar
        onVideoSelect={onVideoSelect}
        key={video.id.videoId}
        video={video}

        />
    ));
  return (
    <div>
        {videoSide}
    </div>
  )
}

export default SideVideo