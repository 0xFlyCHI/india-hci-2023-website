import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-web';
import animationData from '../public/images/Lego.json';

const LoadingScreen = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoaded(true);
      }, 2000);
    };
    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div className={`loading-screen ${isLoaded ? 'loaded' : ''}`}>
      <Lottie
        options={{
          animationData,
          loop: true,
          autoplay: true,
        }}
        height={200}
        width={200}
      />
    </div>
  );
};

export default LoadingScreen;
