import React from 'react';
import PropertyCard from './PropertyCard';

const PropertyList = ({ properties, loading }) => {
    if (loading) {
        return <div className="loading">Finding perfect homes...</div>;
    }

    if (!properties || properties.length === 0) {
        return <div className="no-results">No properties found matching your criteria. Try adjusting your search filters.</div>;
    }

    return (
        <div className="property-grid">
            {properties.map(property => (
                <PropertyCard key={property.id} property={property} />
            ))}
        </div>
    );
};

export default PropertyList;
