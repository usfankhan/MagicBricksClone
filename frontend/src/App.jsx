import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import PropertyList from './components/PropertyList';
import './index.css';

function App() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);

  const [searchParams, setSearchParams] = useState({
    city: '',
    type: '',
    min_budget: '',
    max_budget: ''
  });

  const fetchProperties = async (params = {}) => {
    setLoading(true);
    try {
      // Build query string
      const query = new URLSearchParams();
      if (params.city) query.append('city', params.city);
      if (params.type) query.append('type', params.type);
      if (params.min_budget) query.append('min_budget', params.min_budget);
      if (params.max_budget) query.append('max_budget', params.max_budget);

      const qs = query.toString();
      const url = `http://localhost:8000/api/properties/search${qs ? `?${qs}` : ''}`;

      const response = await fetch(url);
      const data = await response.json();
      setProperties(data);
    } catch (error) {
      console.error("Error fetching properties:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Initial fetch
    fetchProperties();
  }, []);

  const handleSearch = (params) => {
    setSearchParams(params);
    fetchProperties(params);
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="logo">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          MagicBricks Clone
        </div>
      </header>

      <section className="hero">
        <h1 className="hero-title">Find Your Dream Home</h1>
        <p className="hero-subtitle">Discover the best properties in Bangalore and Mumbai for rent or buy.</p>
        <SearchBar onSearch={handleSearch} />
      </section>

      <main className="main-content">
        <h2 className="section-title">
          {searchParams.city ? `Properties in ${searchParams.city}` : 'Featured Properties'}
        </h2>
        <PropertyList properties={properties} loading={loading} />
      </main>
    </div>
  );
}

export default App;
