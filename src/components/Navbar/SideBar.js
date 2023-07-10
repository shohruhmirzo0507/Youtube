import React from 'react'

function SideBar({ video, onVideoSelect }) {
    return (
        <div>
            <div className="videoItems" onClick={() => onVideoSelect(video)}>
                <img className='bottom__vid' src={video.snippet.thumbnails.medium.url} alt="overlay" />
                <div className="titleVideos">
                    <b>{video.snippet.title}</b>
                    <p>{video.snippet.channelTitle}</p>
                </div>

            </div>
        </div>
    )
}

export default SideBar