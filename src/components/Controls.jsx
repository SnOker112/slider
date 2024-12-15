import React from 'react';
import './Controls.css';

const Controls = ({ goToPrevSlide, goToNextSlide, isAutoPlay, toggleAutoPlay }) => {
    return (
        <div className="controls">
            <button onClick={goToPrevSlide} className="control-button">Назад</button>
            <button onClick={toggleAutoPlay} className="control-button">
                {isAutoPlay ? 'Стоп' : 'Старт'}
            </button>
            <button onClick={goToNextSlide} className="control-button">Вперёд</button>
        </div>
    );
};

export default Controls;
