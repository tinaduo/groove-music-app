import dynamic from 'next/dynamic';
import React from 'react';

const Lottie = dynamic(() => import('react-lottie'), { ssr: false });

const LottiePlayer = ({ animationPath, width, height }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    path: animationPath, 
  };

  return <Lottie options={defaultOptions} height={height} width={width} />;
};

export default LottiePlayer;
