import React from 'react';
import './Slider.css';

const Slider = ({ images, currentIndex }) => {
    return (
        <div className="slider">
            <img
                src={images[currentIndex]}
                alt={`Слайд ${currentIndex + 1}`}
                className="slider-image"
            />
        </div>
    );
};

export default Slider;
