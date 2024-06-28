import React from 'react';
import Video from './tunalk.mp4'

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <VideoBackground />
    </div>
  );
};

const VideoBackground = () => {
  return (
    <video
      autoPlay
      loop
      muted
      className="absolute inset-0 h-full w-full object-cover"
    >
      <source src={Video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default Hero;





