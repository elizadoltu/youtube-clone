import React from 'react';
import { FaUserCircle, FaPlusCircle } from 'react-icons/fa';

const AvatarButton = () => {
    return (
        <div className="flex items-center">
            <div className="text-3xl mr-4 cursor-pointer">
                <FaUserCircle className="text-gray-500" />
            </div>
            <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-md text-base">Add Video</button> {/* Add Video Button */}
            <div className="text-3xl ml-2 cursor-pointer">
                <FaPlusCircle className="text-red-500" /> 
            </div>
        </div>
    );
};

export default AvatarButton;
