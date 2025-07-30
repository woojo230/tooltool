import React, { useState, useRef, useEffect, useCallback } from 'react';
import style from './Slider.module.css';

import img1 from '../../../assets/caseStudy/enchelon_casestudy/enchelon_casestudy_01.jpg';
import img2 from '../../../assets/caseStudy/enchelon_casestudy/enchelon_casestudy_02.jpg';
import video3 from '../../../assets/caseStudy/enchelon_casestudy/enchelon_casestudy_03.mp4';
import img4 from '../../../assets/caseStudy/enchelon_casestudy/enchelon_casestudy_04.jpg';
import video5 from '../../../assets/caseStudy/enchelon_casestudy/enchelon_casestudy_05.mp4';
import img6 from '../../../assets/caseStudy/enchelon_casestudy/enchelon_casestudy_06.jpg';
import video7 from '../../../assets/caseStudy/enchelon_casestudy/enchelon_casestudy_07.mp4';

export const mockData = [
  {
    data: img1,
    type: 'image',
  },
  {
    data: img2,
    type: 'image',
  },
  {
    data: video3,
    type: 'video',
  },
  {
    data: img4,
    type: 'image',
  },
  {
    data: video5,
    type: 'video',
  },
  {
    data: img6,
    type: 'image',
  },
  {
    data: video7,
    type: 'video',
  },
];

export function Slider({ title, theme, mockData }) {
  const [sliderValue, setSliderValue] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselTrackRef = useRef(null);
  const carouselRef = useRef(null);
  const animationRef = useRef(null);
  const startTimeRef = useRef(null);
  const duration = 30000;

  const getMaxScroll = useCallback(() => {
    if (!carouselTrackRef.current || !carouselRef.current) return 0;
    return (
      carouselTrackRef.current.scrollWidth - carouselRef.current.clientWidth
    );
  }, []);

  const animate = useCallback(
    (timestamp) => {
      if (isPaused) return;
      if (!startTimeRef.current) startTimeRef.current = timestamp;

      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const maxScroll = getMaxScroll();

      setSliderValue(progress * 100);
      if (carouselRef.current) {
        carouselRef.current.scrollLeft = progress * maxScroll;
      }

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    },
    [isPaused, getMaxScroll]
  );

  // 컴포넌트 마운트 시 애니메이션 시작
  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate]);

  // 슬라이더 변경 핸들러
  const handleSliderChange = (e) => {
    const value = parseFloat(e.target.value);
    setSliderValue(value);
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = (value / 100) * getMaxScroll();
    }
  };

  // 슬라이더 드래그 이벤트 핸들러
  const handlePointerDown = () => {
    setIsPaused(true);
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  const handlePointerUp = () => {
    setIsPaused(false);
    const pct = sliderValue / 100;
    startTimeRef.current = performance.now() - pct * duration;
    animationRef.current = requestAnimationFrame(animate);
  };

  // 스크롤 이벤트 핸들러
  const handleScroll = () => {
    if (!carouselRef.current) return;
    const maxScroll = getMaxScroll();
    const newValue =
      maxScroll > 0 ? (carouselRef.current.scrollLeft / maxScroll) * 100 : 0;
    setSliderValue(newValue);
  };

  return (
    <div className={style.caseBlock}>
      <div className={style.carousel} ref={carouselRef} onScroll={handleScroll}>
        <div className={style.carouselTrack} ref={carouselTrackRef}>
          {mockData.map((data, idx) =>
            data.type === 'image' ? (
              <img key={idx} src={data.data} alt={`Slide ${idx + 1}`} />
            ) : (
              <video
                key={idx}
                src={data.data}
                autoPlay
                muted
                loop
                playsInline
              />
            )
          )}
        </div>
      </div>

      <div className={style.scrollSlider}>
        <input
          type="range"
          className={style.scrollHandle}
          min={0}
          max={100}
          step={0.1}
          value={sliderValue}
          onChange={handleSliderChange}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
        />
      </div>

      <div className={style.tooltoolLandingButton}>
        <div className={style.leftContainer}>
          <span>{title}</span>
          <span>{theme}</span>
        </div>
        <div className={style.rightContainer}>
          <a>Try This Tool!</a>
        </div>
      </div>
    </div>
  );
}

export default Slider;
