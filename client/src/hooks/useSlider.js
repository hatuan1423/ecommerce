import { useState, useEffect, useRef } from 'react';

const useSlider = (slideCount) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slideCount);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slideCount) % slideCount);
    };

    const goToSlide = (index) => {
        setCurrentIndex((index + slideCount) % slideCount);
    };

    useEffect(() => {
        // const interval = setInterval(() => {
        //     nextSlide();
        // }, 3000);

        // return () => clearInterval(interval);
    }, [currentIndex, slideCount]);

    return {
        currentIndex,
        sliderRef,
        nextSlide,
        prevSlide,
        goToSlide,
    };
};

export default useSlider;
