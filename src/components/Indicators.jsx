import React from 'react';
import './Indicators.css';

const Indicators = ({ images, currentIndex }) => {
    return (
        <div className="indicators">
            {images.map((_, index) => (
                <span
                    key={index}
                    className={`indicator ${index === currentIndex ? 'active' : ''}`}
                >
          ●
        </span>
            ))}
        </div>
    );
};

export default Indicators;
