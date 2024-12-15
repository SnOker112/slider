import React, { useState, useEffect } from 'react';
import Slider from './components/Slider';
import Controls from './components/Controls';
import Indicators from './components/Indicators';
import './App.css';
import first from "./images/1.jpg"
import second from "./images/2.jpg"
import third from "./images/3.jpg"
import four from "./images/4.jpg"

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const images = [
      first,
      second,
      third,
      four,
  ];


  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };


  useEffect(() => {
    let interval;
    if (isAutoPlay) {
      interval = setInterval(goToNextSlide, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  return (
      <div className="app">
        <h1>Слайдер Одежды</h1>
        <Slider images={images} currentIndex={currentIndex} />
        <Controls
            goToPrevSlide={goToPrevSlide}
            goToNextSlide={goToNextSlide}
            isAutoPlay={isAutoPlay}
            toggleAutoPlay={() => setIsAutoPlay(!isAutoPlay)}
        />
        <Indicators images={images} currentIndex={currentIndex} />
      </div>
  );
};

export default App;
