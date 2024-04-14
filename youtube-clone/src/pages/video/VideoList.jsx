import React, { useState, useEffect } from 'react';
import API_KEY from './API_KEY';
import VideoItem from '../../components/VideoItem';

const VideoList = ({ playlistId }) => {
    const [videos, setVideos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchVideos = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const response = await fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=15&playlistId=${playlistId}&key=${API_KEY}`);
                if (!response.ok) {
                    throw new Error(`Error fetching videos: ${response.statusText}`);
                }
                const data = await response.json();
                setVideos(data.items);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchVideos();
    }, [playlistId]);

    return (
        <div className="video-list pl-64"> {/* Add left padding */}
            {isLoading && <p>Loading videos...</p>}
            {error && <p>Error: {error}</p>}
            <div className="flex flex-wrap">
                {videos.map((video) => (
                    <VideoItem key={video.snippet.resourceId.videoId} video={video} />
                ))}
            </div>
            {videos.length === 0 && !isLoading && <p>No videos found.</p>}
        </div>
    );
};

export default VideoList;
