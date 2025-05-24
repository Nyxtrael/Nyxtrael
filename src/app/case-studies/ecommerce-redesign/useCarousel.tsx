import { useState, useEffect, useCallback, useRef } from "react";

interface UseCarouselReturn {
  currentSlide: number;
  handleNextSlide: () => void;
  handlePrevSlide: () => void;
  handlePause: () => void;
  handleResume: () => void;
}

export default function useCarousel(totalSlides: number, delay: number = 5000): UseCarouselReturn {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isPausedRef = useRef(false);

  const handleNextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  }, [totalSlides]);

  const handlePrevSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const handlePause = useCallback(() => {
    isPausedRef.current = true;
  }, []);

  const handleResume = useCallback(() => {
    isPausedRef.current = false;
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (!isPausedRef.current) {
        handleNextSlide();
      }
    }, delay);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [delay, handleNextSlide]);

  return {
    currentSlide,
    handleNextSlide,
    handlePrevSlide,
    handlePause,
    handleResume,
  };
}