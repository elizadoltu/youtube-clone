import React, { useState } from 'react';
import VideoList from './pages/video/VideoList.jsx';
import SearchBar from './components/SearchBar.jsx';
import Sidebar from './components/Sidebar.jsx';
import AvatarButton from './components/UserComponent.jsx';

export default function App() {
    const [searchQuery, setSearchQuery] = useState('');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex">
            <Sidebar isOpen={isSidebarOpen} toggleMenu={toggleSidebar} />
            <div className="flex flex-col w-full">
                <div className="p-4 flex justify-between items-center">
                    <SearchBar onSearch={handleSearch} className="flex-grow" />
                    <AvatarButton />
                </div>
                <div className="flex-grow">
                    <VideoList playlistId={'UU5H79zblqeSuQ7ctaKNRXBw'} />
                    <VideoList playlistId={'UU-lHJZR3Gqxm24_Vd_AJ5Yw'} />
                    <VideoList playlistId={'UUHtlbj_X4knI5McodzI3Zdg'} />
                    <VideoList playlistId={'UUHJ8viU0XVqfm9HmSESNx6Q'} />
                </div>
            </div>
        </div>
    );
}
