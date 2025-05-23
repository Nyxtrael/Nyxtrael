"use client";

import { useState, useEffect, useCallback, useRef } from "react";

export default function useCarousel(totalSlides, delay = 5000) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef(null);
  const isPausedRef = useRef(false);

  const startAutoAdvance = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!isPausedRef.current) {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }
    }, delay);
  }, [totalSlides, delay]);

  const stopAutoAdvance = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, []);

  const handleNextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    isPausedRef.current = true;
    stopAutoAdvance();
    startAutoAdvance();
  }, [totalSlides, stopAutoAdvance, startAutoAdvance]);

  const handlePrevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    isPausedRef.current = true;
    stopAutoAdvance();
    startAutoAdvance();
  }, [totalSlides, stopAutoAdvance, startAutoAdvance]);

  const handlePause = useCallback(() => {
    isPausedRef.current = true;
    stopAutoAdvance();
  }, [stopAutoAdvance]);

  const handleResume = useCallback(() => {
    isPausedRef.current = false;
    startAutoAdvance();
  }, [startAutoAdvance]);

  useEffect(() => {
    startAutoAdvance();
    return () => stopAutoAdvance();
  }, [startAutoAdvance, stopAutoAdvance]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        handleNextSlide();
      } else if (event.key === "ArrowLeft") {
        handlePrevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNextSlide, handlePrevSlide]);

  return {
    currentSlide,
    handleNextSlide,
    handlePrevSlide,
    handlePause,
    handleResume,
  };
}