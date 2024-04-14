import React from 'react';
import { FaBars } from 'react-icons/fa';

const channels = [
    { id: 'UC-lHJZR3Gqxm24_Vd_AJ5Yw', name: 'PewDiePie' },
    { id: 'UC5H79zblqeSuQ7ctaKNRXBw', name: 'Theo' },
    { id: 'UCHtlbj_X4knI5McodzI3Zdg', name: 'Faiar' },
    { id: 'UCHJ8viU0XVqfm9HmSESNx6Q', name: 'Teches' }
];

const Sidebar = ({ toggleMenu }) => {
 
    const generateAvatar = (name) => {
  
        const avatarLetter = name.charAt(0).toUpperCase();
        return `https://avatars.dicebear.com/api/gridy/${avatarLetter}.svg`;
    };

    return (
        <div className="fixed left-0 top-0 h-full bg-gray-800 text-white w-64 p-4">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-red-500">Youish</h1>
                <button onClick={toggleMenu} className="text-white focus:outline-none">
                    <FaBars className="text-2xl" />
                </button>
            </div>
            <ul className="space-y-2">
                <li className="text-red-500">Home</li>
                <li className="text-red-500">Shorts</li>
                <li className="text-red-500">Your Channel</li>
                <li className="text-red-500">History</li>
                <li className="text-red-500">Playlists</li>
            </ul>
            <h2 className="text-xl font-semibold mt-4 mb-2 text-red-500">Channels</h2>
            <ul className="space-y-2">
                {channels.map((channel) => (
                    <li key={channel.id} className="flex items-center">
                        <img src={generateAvatar(channel.name)} alt={channel.name} className="w-8 h-8 rounded-full" />
                        <span className="ml-2 text-red-500">{channel.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
