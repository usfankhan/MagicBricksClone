import React from 'react';

const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
    }).format(price);
};

const PropertyCard = ({ property }) => {
    return (
        <div className="property-card">
            <div className="property-image-container">
                <img
                    src={property.image_url}
                    alt={property.title}
                    className="property-image"
                    loading="lazy"
                />
                <span className="property-badge">{property.type}</span>
                <span className="property-city-badge">{property.city}</span>
            </div>

            <div className="property-content">
                <div className="property-price">
                    {formatPrice(property.price)}
                    {property.type === 'Rent' && <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', fontWeight: 'normal' }}>/month</span>}
                </div>

                <h3 className="property-title">{property.title}</h3>
                <p className="property-desc">{property.description}</p>

                <div className="property-features">
                    <div className="feature-item">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                            <polyline points="9 22 9 12 15 12 15 22" />
                        </svg>
                        {property.bedrooms} Bed
                    </div>
                    <div className="feature-item">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                        </svg>
                        {property.bathrooms} Bath
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;
