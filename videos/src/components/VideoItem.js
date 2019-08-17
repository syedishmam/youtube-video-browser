import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div className="video-item item">
            <img 
                className="ui image" 
                alt="video" 
                src={video.snippet.thumbnails.medium.url} 
                onClick={() => onVideoSelect(video)} 
            />
            <div className="content">
                <div className="header">{video.snippet.title}</div> 
            </div>
        </div>
    )
};

export default VideoItem;