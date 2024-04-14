import React from 'react';

const VideoItem = ({ video }) => {
    return (
        <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <a href={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`} className="block">
                    <div className="p-2">
                        <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} className="w-full h-32 sm:h-36 object-cover rounded-t-lg" />
                    </div>
                    <div className="p-3">
                        <h3 className="text-base sm:text-lg font-medium text-gray-900 hover:text-red-500">{video.snippet.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{video.snippet.channelTitle}</p>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default VideoItem;
