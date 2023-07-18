import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../public/98742-loading.json';

const LoadingSpinner = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="flex items-center bg-white justify-center h-screen">
            <Lottie options={defaultOptions} height={100} width={100} />
          </div>
 );
};

export default LoadingSpinner;
