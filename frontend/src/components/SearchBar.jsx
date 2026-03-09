import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [city, setCity] = useState('');
    const [type, setType] = useState('');
    const [minBudget, setMinBudget] = useState('');
    const [maxBudget, setMaxBudget] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch({
            city: city === 'All Cities' ? '' : city,
            type: type === 'All Types' ? '' : type,
            min_budget: minBudget,
            max_budget: maxBudget
        });
    };

    return (
        <form className="search-container" onSubmit={handleSubmit}>
            <div className="search-field">
                <label className="search-label">Location</label>
                <select
                    className="search-select"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                >
                    <option value="">All Cities</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Mumbai">Mumbai</option>
                </select>
            </div>

            <div className="search-field">
                <label className="search-label">Property Type</label>
                <select
                    className="search-select"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                >
                    <option value="">Buy & Rent</option>
                    <option value="Buy">Buy</option>
                    <option value="Rent">Rent</option>
                </select>
            </div>

            <div className="search-field">
                <label className="search-label">Min Budget</label>
                <input
                    type="number"
                    className="search-input"
                    placeholder="e.g. 10000"
                    value={minBudget}
                    onChange={(e) => setMinBudget(e.target.value)}
                />
            </div>

            <div className="search-field">
                <label className="search-label">Max Budget</label>
                <input
                    type="number"
                    className="search-input"
                    placeholder="e.g. 5000000"
                    value={maxBudget}
                    onChange={(e) => setMaxBudget(e.target.value)}
                />
            </div>

            <button type="submit" className="search-button">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                Search
            </button>
        </form>
    );
};

export default SearchBar;
