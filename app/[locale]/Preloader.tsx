'use client';
// components/Preloader.tsx
import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../../public/lottie/lottieUpLift.json';

interface PreloaderProps {
  isLoading: boolean;
}

const Preloader: React.FC<PreloaderProps> = ({ isLoading }) => {
  const [isMounted, setIsMounted] = useState(isLoading);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      const timeoutId = setTimeout(() => {
        setIsFading(true);
      }, 300);

      const hideTimeoutId = setTimeout(() => {
        setIsMounted(false); // Desmonta el componente después de la animación
      }, 800);

      return () => {
        clearTimeout(timeoutId);
        clearTimeout(hideTimeoutId);
      };
    } else {
      setIsMounted(true);
    }
  }, [isLoading]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  if (!isMounted) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
        zIndex: 9999,
        opacity: isFading ? 0 : 1,
        transition: 'opacity 0.5s ease-in-out',
        animation: 'preloaderAnimation 1s forwards',
      }}
    >
      <Lottie
        options={defaultOptions}
        height={'auto'}
        width={'100%'}
        style={{ maxWidth: '400px' }}
      />

      <style jsx>{`
        @keyframes preloaderAnimation {
          0% {
            background-color: red;
          }
          10% {
            background-color: #000000;
          }
          100% {
            background-color: #000000;
          }
        }
      `}</style>
    </div>
  );
};

export default Preloader;