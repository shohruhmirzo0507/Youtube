import React from 'react'

function Video({ video: { id: { videoId }, snippet: { title, channelTitle, description } } }) {

    if (!videoId) return <p>No Results</p>;
    const videoSrc = `https://www.youtube.com/embed/${videoId}`;


    return (
        <div>
            <div className="videoIframe">
                <iframe className='about__vids' frameborder="0"
                    allowFullScreen
                    title="Video player"
                    src={videoSrc}
                />
            </div>
            <div className="videoInfo">
                <h2 className='titleVideo'>{title}</h2>
                <h3 className='channelTitle'>{channelTitle}</h3>
                <p className='descriptionVideo'>{description}</p>
            </div>
        </div>
    )
}

export default Video