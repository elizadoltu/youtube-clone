import React, { useState } from 'react';

const SearchBar = ({ onSearch, className }) => {
    const [query, setQuery] = useState('');

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault(); 
        onSearch(query); 
    };

    return (
        <form onSubmit={handleSubmit} className={`flex items-center justify-center mt-4 mb-4 px-4 ${className}`}>
            <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Search videos by name..."
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                style={{ maxWidth: '250px' }}
            />
            <button type="submit" className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-md ml-2">Search</button>
        </form>
    );
};

export default SearchBar;
